<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $rollno = $data['rollno'];
  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];
  $date = $data['date'];

  $getClassIDQuery = mysqli_query($conn,"select class_id,subject_name,subject_code from class where course='$course' && branch='$branch' && year='$year' && sem = '$sem'");
  if (mysqli_num_rows($getClassIDQuery)!=0) {
    $totalAttendanceData = "";
    while ($rows = mysqli_fetch_array($getClassIDQuery)) {
      $classID = $rows['class_id'];
      $subject_name = $rows['subject_name'];
      $subject_code = $rows['subject_code'];

      $getAttendanceStateQuery = mysqli_query($conn,"select * from attendance where rollno='$rollno' && attandance_state = 'present' &&class_id='$classID' && date <='$date'");
      $classAttended = mysqli_num_rows($getAttendanceStateQuery);
      $totalClassQuery = mysqli_query($conn,"select DISTINCT date from attendance where class_id='$classID' && date <= '$date'");
      $totalClass = mysqli_num_rows($totalClassQuery);
      if ($totalClass!=0) {
         $percentage = ($classAttended/$totalClass)*100;
      }

      if ($totalAttendanceData != "") {$totalAttendanceData .= ",";}

      $totalAttendanceData .= '{"subject_name":"'  . $subject_name . '",';
      $totalAttendanceData .= '"subject_code":"'   . $subject_code   . '",';
      $totalAttendanceData .= '"classAttended":"'   . $classAttended  . '",';
      $totalAttendanceData .= '"percentage":"'   . $percentage  . '",';
      $totalAttendanceData .= '"totalClass":"'. $totalClass   . '"}';

    }

    $totalAttendanceData ='{"AttendanceData":['.$totalAttendanceData.']}';
  } else {
    $totalAttendanceData = "No result found";
  }

  echo($totalAttendanceData);
 ?>
