<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

var_dump($_SERVER['REQUEST_METHOD']);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }
  $name = $_POST['name'];
  $sub = $_POST['sub'];
  $phone = $_POST['phone'];
  $web = $_POST['web'];
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    $email is contacting you from '.....doesi',
    Date: $date

    Name: $name.
    Subject: $sub.
    Phone No: $phone.
    Web Address:  $web.

    Message: $message.
    ";
    
    $headers = 	'From: Contact Form <idlasifmahmud@gmail.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'idlasifmahmud@gmail.com';
    $subject = 'Contacting you';
    
    if (mail($to, $subject, $emailBody)) {
      $sent = true;	
    }
  }
}else{

  echo "Nothing to return";
  return false;
}
?>

  <?php if (!empty($errors)) : ?> 

            {
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>