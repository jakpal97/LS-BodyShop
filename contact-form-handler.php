<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Zdefiniuj zmienne i ustaw puste wartości
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    // Walidacja danych
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required!";
        exit;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    // Adres e-mail, na który będą wysyłane wiadomości
    $to = "ls.bodyshop.dorset@gmail.com"; // Twój firmowy e-mail Gmail
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\n";

    // Wysyłka e-maila
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request!";
}
?>