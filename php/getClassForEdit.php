<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $classID = $data['classID'];

  $getClassQuery = mysqli_query($conn,"select * from class where class_id = '$classID'");

  if (mysqli_num_rows($getClassQuery)!=0) {
    $msg = "";
    while ($rows = mysqli_fetch_array($getClassQuery)) {
      $subject_name = $rows['subject_name'];
      $subject_code = $rows['subject_code'];
      $course = $rows['course'];
      $branch = $rows['branch'];
      $year = $rows['year'];
      $sem = $rows['sem'];
      $fid = $rows['fid'];

      $msg .= '{"classID":"'  . $classID . '",';
      $msg .= '"subject_name":"'   . $subject_name  . '",';
      $msg .= '"subject_code":"'   . $subject_code  . '",';
      $msg .= '"course":"'   . $course  . '",';
      $msg .= '"branch":"'   . $branch . '",';
      $msg .= '"year":"'   . $year  . '",';
      $msg .= '"sem":"'   . $sem  . '",';
      $msg .= '"fid":"'. $fid  . '"}';
    }
  } else {
    $msg = "Class not found";
  }
  echo($msg);
 ?>
