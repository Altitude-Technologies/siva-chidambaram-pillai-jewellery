<?php
/**
 * Contact / enquiry form mail handler.
 *
 * Lives next to index.html in the deployed site (Hostinger: public_html/).
 * The React contact form POSTs JSON here; it replies with JSON.
 *
 * ---------------------------------------------------------------------------
 * BEFORE GOING LIVE: set MAIL_FROM to an address on YOUR OWN domain.
 * Hosts (Hostinger included) reject or spam-filter mail whose From address is
 * not on the sending domain — so it must NOT be a gmail.com address.
 * Create e.g. noreply@yourdomain.com in hPanel > Emails, then put it below.
 * ---------------------------------------------------------------------------
 */

declare(strict_types=1);

/** Where enquiries are delivered. */
const MAIL_TO = 'scjewellery916@gmail.com';

/** Must be an address on the hosting domain (scpjewellery.in) — not gmail.
 *  Create this mailbox in hPanel > Emails before going live. */
const MAIL_FROM      = 'noreply@scpjewellery.in';
const MAIL_FROM_NAME = 'SCP Jewellery Website';

const MAIL_SUBJECT = 'New Enquiry - SCP Jewellery Website';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/** Send a JSON response and stop. */
function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Accept a JSON body (what the site sends) or a classic form post.
$contentType = (string) ($_SERVER['CONTENT_TYPE'] ?? '');
if (stripos($contentType, 'application/json') !== false) {
    $raw  = (string) file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) {
        $data = [];
    }
} else {
    $data = $_POST;
}

$field = static function (string $key) use ($data): string {
    return trim((string) ($data[$key] ?? ''));
};

// Honeypot: real users never see this field, bots fill it in.
// Pretend it worked so the bot doesn't retry, but send nothing.
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
if (mb_strlen($name) > 120 || mb_strlen($phone) > 40 || mb_strlen($message) > 5000) {
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

// -f sets the envelope sender; hosts require it to match the domain.
$sent = @mail(MAIL_TO, MAIL_SUBJECT, $body, $headers, '-f' . MAIL_FROM);

if (!$sent) {
    respond(500, [
        'ok'    => false,
        'error' => 'Sorry, we could not send your message. Please call us instead.',
    ]);
}

respond(200, ['ok' => true]);
