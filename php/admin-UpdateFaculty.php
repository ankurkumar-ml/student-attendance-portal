<?php
  include("config.php");
  $json  = file_get_contents("php://input");
  $data = json_decode($json,true);

  $fid = $data['fid'];
  $name = $data['name'];
  $email = $data['email'];
  $mobile = $data['mobile'];
  $password = $data['password'];

  $UpdateQuery = "update faculty set name = '$name' , email = '$email' , mobile = '$mobile' where f_id = '$fid'";
  if (mysqli_query($conn,$UpdateQuery)) {
    echo "Updated successfully.";
  } else {
    echo "Faculty Profile not updated.";
  }
 ?>
