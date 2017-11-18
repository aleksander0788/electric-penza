<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);

if ( ($name === '') || ($phone === '')) {
$status = 'field_error';
echo $status;
return false;
}
$to = 'aleksander0788@yandex.ru';
$subject = 'Заказ обратного звонка';
$message = $name . " " . $phone;
$headers = 'From: webmaster@example.com' . "\r\n" .
'Reply-To: webmaster@example.com' . "\r\n" .
'X-Mailer: PHP/' . phpversion();



if(mail($to, $subject, $message, $headers)){
$status = "Ваше письмо отправлено";
echo $status;
} else {
$status = "Ошибка отправки письма!";
echo $status;
}
} else {
$status = "Не удалось отправить сообщение!";
echo $status;
}

?>