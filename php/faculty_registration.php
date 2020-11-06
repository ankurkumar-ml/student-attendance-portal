<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $fid = test_input($data['fid']);
  $name = test_input($data['name']);
  $email = test_input($data['email']);
  $mobile = test_input($data['mobile']);
  $password = test_input($data['password']);
  $date = $data['date'];

  $sql = "insert into faculty (f_id,name,email,mobile,password,date) values ('$fid','$name','$email','$mobile','$password','$date')";
  if(mysqli_query($conn,$sql))
  {
    echo "Registration completed successfully.";
  }
  else {
    echo "Registration not completed.";
  }

  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
 ?>
