<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true); // Passing `true` enables exceptions

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->Host = 'aldonasabaniene.com'; // Set the SMTP server to send through
    $mail->SMTPAuth = true;
    $mail->Username = 'no-reply@aldonasabaniene.com'; // SMTP username
    $mail->Password = 'Work@1234567890'; // SMTP password
    $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to

    $mail->setFrom($mail->Username, 'Aldonasabaniene');
    $mail->addAddress('sanusiabdulazeezadebayo@gmail.com'); // Add a recipient
    
    $mail->isHTML(true); // Set email format to HTML

    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = "<b>Name:</b> $name<br><b>Email:</b> $email<br><b>Message:</b><br>$message";
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (!$mail->send()) {
        http_response_code(500);
        echo json_encode([
            "message" => 'Mailer Error: ' . $mail->ErrorInfo,
            "status" => "error"
        ]);
    } else {
        http_response_code(200);
        echo json_encode([
            "message" => "Message has been sent successfully",
            "status" => "success"
        ]);
    }
}
?>
