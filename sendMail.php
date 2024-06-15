<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST["message"]);
  
  $to = "solovievdenis2004@gmail.com";
  $subject = "Новое сообщение с вашего сайта";
  $body = "Email: $email\nСообщение:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Сообщение отправлено успешно.";
  } else {
    echo "Ошибка при отправке сообщения.";
  }
}
?>
