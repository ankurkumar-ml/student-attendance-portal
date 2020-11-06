<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $rollno = $data['rollno'];

  $getStudentQuery = mysqli_query($conn,"select * from student where rollno = '$rollno'");
  if (mysqli_num_rows($getStudentQuery)!=0) {
    $msg = "";
    while ($row = mysqli_fetch_array($getStudentQuery)) {
      $name = $row['name'];
      $course = $row['course'];
      $branch = $row['branch'];
      $year = $row['year'];
      $sem = $row['sem'];
      $email = $row['email'];
      $password = $row['password'];

      $msg .= '{"rollno":"'  . $rollno . '",';
      $msg .= '"name":"'   . $name   . '",';
      $msg .= '"course":"'   . $course  . '",';
      $msg .= '"branch":"'   . $branch  . '",';
      $msg .= '"year":"'   . $year . '",';
      $msg .= '"sem":"'   . $sem . '",';
      $msg .= '"email":"'   . $email  . '",';
      $msg .= '"password":"'. $password  . '"}';
    }
  } else {
    $msg = "Can not find student profile.";
  }

  echo($msg);
 ?>
