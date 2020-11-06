<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $username = $data['username'];
  $password = $data['password'];

  $res = mysqli_query($conn, "select * from admin where user_name = '$username' && PASSWORD = '$password'");
  if (mysqli_num_rows($res)!=0) {
    echo "logged in successfully.";
  } else {
    echo "Invalid Faculty ID or Password.";
  }
 ?>
