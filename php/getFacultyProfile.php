<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $fid = $data['fid'];

  $getFacultyQuery = mysqli_query($conn,"select * from faculty where f_id = '$fid'");
  $msg = "";
  if (mysqli_num_rows($getFacultyQuery)!=0) {
    while ($row = mysqli_fetch_array($getFacultyQuery)) {
      $name = $row['name'];
      $email = $row['email'];
      $contact = $row['mobile'];
      $password = $row['password'];

      $msg .= '{"name":"'  . $name . '",';
      $msg .= '"email":"'   . $email   . '",';
      $msg .= '"password":"'   . $password   . '",';
      $msg .= '"mobile":"'. $contact  . '"}';
    }
  }
  echo($msg);
 ?>
