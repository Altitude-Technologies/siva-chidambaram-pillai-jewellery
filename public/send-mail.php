<?php
/**
 * Contact / enquiry form mail handler.
 *
 * Lives next to index.html in the deployed site (Hostinger: public_html/).
 * The React contact form POSTs JSON here; it replies with JSON.
 */

declare(strict_types=1);

/** Where enquiries are delivered. */
const MAIL_TO = 'scjewellery916@gmail.com';

/** Must be a real mailbox on the hosting domain (create it in hPanel > Emails). */
const MAIL_FROM      = 'noreply@scpjewellery.in';
const MAIL_FROM_NAME = 'SCP Jewellery Website';

const MAIL_SUBJECT = 'New Enquiry - SCP Jewellery Website';

/**
 * Flip to true temporarily to see the real PHP/mail error in the response.
 * Turn it OFF again once things work — it leaks server details otherwise.
 */
const DEBUG = true;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// Never render PHP notices/warnings into the body — it would corrupt the JSON.
ini_set('display_errors', '0');

/** Collects any warning/notice PHP raises (e.g. from mail()). */
$phpErrors = [];
set_error_handler(static function (int $no, string $str) use (&$phpErrors): bool {
    $phpErrors[] = $str;
    return true; // handled; don't print it
});

/** Send a JSON response and stop. */
function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Length check that works even if mbstring isn't installed. */
function textLen(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

// A fatal (missing extension, parse issue in an include, etc.) would otherwise
// return an empty 500 with no clue. Turn it into JSON we can actually read.
register_shutdown_function(static function () use (&$phpErrors): void {
    $fatal = error_get_last();
    if ($fatal !== null && in_array($fatal['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR], true)) {
        http_response_code(500);
        echo json_encode([
            'ok'    => false,
            'error' => 'Server error while sending. Please call us instead.',
            'debug' => DEBUG ? $fatal['message'] . ' @ ' . $fatal['file'] . ':' . $fatal['line'] : null,
        ], JSON_UNESCAPED_UNICODE);
    }
});

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Accept a JSON body (what the site sends) or a classic form post.
$contentType = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
if (stripos($contentType, 'application/json') !== false) {
    $decoded = json_decode((string) file_get_contents('php://input'), true);
    $data    = is_array($decoded) ? $decoded : [];
} else {
    $data = $_POST;
}

$field = static function (string $key) use ($data): string {
    return trim((string) ($data[$key] ?? ''));
};

// Honeypot: people never see this field, bots fill it. Pretend success, send nothing.
if ($field('company') !== '') {
    respond(200, ['ok' => true]);
}

$name     = $field('name');
$phone    = $field('phone');
$email    = $field('email');
$interest = $field('interest');
$message  = $field('message');

$errors = [];
if ($name === '') {
    $errors[] = 'Please enter your name.';
}
if ($phone === '') {
    $errors[] = 'Please enter your phone number.';
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'That email address does not look valid.';
}
if (textLen($name) > 120 || textLen($phone) > 40 || textLen($message) > 5000) {
    $errors[] = 'That input is too long.';
}
if ($errors !== []) {
    respond(422, ['ok' => false, 'error' => implode(' ', $errors)]);
}

/** Strip CR/LF so user input can never inject extra mail headers. */
$headerSafe = static function (string $value): string {
    return trim(str_replace(["\r", "\n", '%0a', '%0d'], ' ', $value));
};

$safeName  = $headerSafe($name);
$safeEmail = $headerSafe($email);

$body = "New website enquiry\n"
    . "--------------------------------\n"
    . 'Name:     ' . $name . "\n"
    . 'Phone:    ' . $phone . "\n"
    . 'Email:    ' . ($email !== '' ? $email : '-') . "\n"
    . 'Interest: ' . ($interest !== '' ? $interest : '-') . "\n"
    . "--------------------------------\n"
    . "Message:\n"
    . ($message !== '' ? $message : '-') . "\n\n"
    . "--------------------------------\n"
    . 'Received: ' . date('d M Y, H:i') . "\n"
    . 'IP:       ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$replyTo = $safeEmail !== ''
    ? sprintf('%s <%s>', $safeName, $safeEmail)
    : MAIL_FROM;

$headers = implode("\r\n", [
    sprintf('From: %s <%s>', MAIL_FROM_NAME, MAIL_FROM),
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!function_exists('mail')) {
    respond(500, [
        'ok'    => false,
        'error' => 'Mail is not available on this server. Please call us instead.',
        'debug' => DEBUG ? 'PHP mail() function is disabled.' : null,
    ]);
}

// Some hosts refuse the -f envelope-sender param; try with it, then without.
$sent = mail(MAIL_TO, MAIL_SUBJECT, $body, $headers, '-f' . MAIL_FROM);
if (!$sent) {
    $sent = mail(MAIL_TO, MAIL_SUBJECT, $body, $headers);
}

restore_error_handler();

if (!$sent) {
    respond(500, [
        'ok'    => false,
        'error' => 'Sorry, we could not send your message. Please call us instead.',
        'debug' => DEBUG ? ($phpErrors !== [] ? implode(' | ', $phpErrors) : 'mail() returned false with no error message.') : null,
    ]);
}

respond(200, ['ok' => true]);
