<?php

$method = $_SERVER['REQUEST_METHOD'];
$admin_email  = "garanin72@gmail.com";
$reply_email = "no-reply@garanins.ru";
// $token = "1393310486:AAHZe6yvxrjDuIyxa1U6q4tHoD_iK7u1rRA";
// $chat_id = "-1001366539154";
//Script Foreach

//https://api.telegram.org/bot1393310486:AAHZe6yvxrjDuIyxa1U6q4tHoD_iK7u1rRA/getUpdates
$c = true;
if ( $method === 'POST' ) {

	// $project_name = trim($_POST["project_name"]);
	$project_name = "Заявка с сайта garanins.ru";
	$form_subject = "Новая заявка";

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
				<td style='padding: 10px; width: auto;'><b>$key:</b></td>
				<td style='padding: 10px;width: 100%;'>$value</td>
			</tr>
			";
			$txt .= "<b>".$key."</b> ".$value."%0A";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr>' ) . "
				<td style='padding: 10px; width: auto;'><b>$key:</b></td>
				<td style='padding: 10px;width: 100%;'>$value</td>
			</tr>
			";
			$txt .= "<b>".$key."</b> ".$value."%0A";
		}
	}
}

$message = "<table style='width: 50%;'>$message</table>";
function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$reply_email.'>' . PHP_EOL .
'Reply-To: '.$reply_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
// 	header('Location: Thanks.html');
//   } else {
// 	echo "Error";
//   }
