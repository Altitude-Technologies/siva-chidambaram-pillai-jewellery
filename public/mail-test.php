<?php
/**
 * TEMPORARY diagnostic — tells us why send-mail.php is failing.
 *
 * Visit:  https://scpjewellery.in/mail-test.php?key=scp-check
 * DELETE THIS FILE once mail is working.
 */

declare(strict_types=1);

if (($_GET['key'] ?? '') !== 'scp-check') {
    http_response_code(404);
    exit('Not found');
}

header('Content-Type: text/plain; charset=utf-8');
ini_set('display_errors', '0');

const MAIL_TO   = 'scjewellery916@gmail.com';
const MAIL_FROM = 'noreply@scpjewellery.in';

$warnings = [];
set_error_handler(static function (int $no, string $str) use (&$warnings): bool {
    $warnings[] = $str;
    return true;
});

echo "=== SERVER ===\n";
echo 'PHP version   : ' . PHP_VERSION . "\n";
echo 'mbstring      : ' . (extension_loaded('mbstring') ? 'yes' : 'NO') . "\n";
echo 'mail() exists : ' . (function_exists('mail') ? 'yes' : 'NO (disabled)') . "\n";
echo 'disabled_funcs: ' . (ini_get('disable_functions') ?: '(none)') . "\n";
echo 'sendmail_path : ' . (ini_get('sendmail_path') ?: '(not set)') . "\n";

echo "\n=== TEST SEND ===\n";
echo 'To  : ' . MAIL_TO . "\n";
echo 'From: ' . MAIL_FROM . "\n\n";

if (!function_exists('mail')) {
    echo "RESULT: mail() is disabled on this host. SMTP is required.\n";
    exit;
}

$headers = implode("\r\n", [
    'From: SCP Jewellery Website <' . MAIL_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$body = "This is a test message from mail-test.php at " . date('d M Y, H:i') . "\n";

$withF = mail(MAIL_TO, 'SCP mail test (with -f)', $body, $headers, '-f' . MAIL_FROM);
echo 'Attempt 1 (with -f envelope sender): ' . ($withF ? 'SUCCESS' : 'FAILED') . "\n";

$plain = mail(MAIL_TO, 'SCP mail test (plain)', $body, $headers);
echo 'Attempt 2 (without -f)             : ' . ($plain ? 'SUCCESS' : 'FAILED') . "\n";

restore_error_handler();

echo "\n=== PHP WARNINGS ===\n";
echo $warnings === [] ? "(none)\n" : implode("\n", $warnings) . "\n";

echo "\n=== WHAT THIS MEANS ===\n";
if ($withF || $plain) {
    echo "mail() reports SUCCESS — check the Gmail inbox AND the spam folder.\n";
    echo "If nothing arrives, the host accepted it but delivery to Gmail was\n";
    echo "blocked (missing SPF/DKIM). Fix = send via SMTP with a domain mailbox.\n";
} else {
    echo "mail() FAILED. Most likely the mailbox " . MAIL_FROM . " does not exist\n";
    echo "yet (create it in hPanel > Emails), or the host blocks mail().\n";
    echo "If it still fails after creating it, we switch to SMTP.\n";
}
