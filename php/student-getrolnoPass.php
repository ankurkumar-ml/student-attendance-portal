<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $rollno = $data['rollno'];
  $password = $data['password'];

  $res = mysqli_query($conn, "select * from student where rollno = '$rollno' && password = '$password'");
  if (mysqli_num_rows($res)!=0) {
    echo "logged in successfully.";
  } else {
    echo "Invalid Roll Number or Password.";
  }
 ?>
