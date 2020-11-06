<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  foreach ($data['AttendanceJSON'][0] as $key => $value) {
    $checkDate = $value['attendanceDate'];
    $checkClass_id = $value['class_id'];
  }

  $checkQuery = mysqli_query($conn,"select * from attendance where date= '$checkDate' && class_id = '$checkClass_id'");
  if (mysqli_num_rows($checkQuery)!=0) {
    $msg = "Attendance already submitted.";
  } else {
    foreach ($data['AttendanceJSON'] as $key => $value) {
      foreach ($value as $key => $Innervalue) {

        $rollno =  $Innervalue['rollno'];
        $attendance = $Innervalue['attendance'];
        $class_id = $Innervalue['class_id'];
        $date = $Innervalue['attendanceDate'];

          $query = "insert into attendance (rollno,attandance_state,date,class_id) values ('$rollno','$attendance','$date','$class_id')";
          if(mysqli_query($conn,$query)) {
            $msg =  "Attendance submitted successfully.";
          } else {
            $msg = "Attendance not submitted.";
          }


      }
    }
  }
//  print_r($data['AttendanceJSON'][0]);

  echo $msg;

 ?>
