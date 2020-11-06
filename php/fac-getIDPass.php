<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $fid = $data['fid'];
  $password = $data['password'];

  $res = mysqli_query($conn, "select * from faculty where f_id = '$fid' && password = '$password'");
  if (mysqli_num_rows($res)!=0) {
    echo "logged in successfully.";
  } else {
    echo "Invalid Faculty ID or Password.";
  }
 ?>
