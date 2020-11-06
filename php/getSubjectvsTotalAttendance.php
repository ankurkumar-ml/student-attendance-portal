<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];
  $subject_name = $data['subject_name'];
  $subject_code = $data['subject_code'];
  $fid = $data['fid'];
  $date = $data['attendanceDate'];

  $classIDQuery = mysqli_query($conn,"select class_id from class where subject_name='$subject_name' && subject_code='$subject_code' && course='$course' && branch='$branch' && year='$year' && sem='$sem' && fid='$fid'");
  if (mysqli_num_rows($classIDQuery)!=0) {
    while ($row = mysqli_fetch_array($classIDQuery)) {
      $classID = $row['class_id'];
    }
  }

  $totalClassQuery = mysqli_query($conn,"SELECT DISTINCT date FROM `attendance` where class_id = '$classID' && date <= '$date'");
  $totalClasses = mysqli_num_rows($totalClassQuery);

  $sno = 0;

  $studentsQuery = mysqli_query($conn,"select rollno from student where course='$course' && branch='$branch' && year='$year' && sem='$sem'");
  if (mysqli_num_rows($studentsQuery)!=0) {
    $totalAttendanceData="";
    while ($row = mysqli_fetch_array($studentsQuery)) {
      $rollno = $row['rollno'];
      $sno++;
      $classAttendedQuery = mysqli_query($conn,"SELECT * FROM `attendance` WHERE rollno = '$rollno' && attandance_state = 'present' && class_id = '$classID' && date <= '$date'");
      $classAttended = mysqli_num_rows($classAttendedQuery);

      $percentage = ($classAttended/$totalClasses)*100;

      if ($totalAttendanceData != "") {$totalAttendanceData .= ",";}
        $totalAttendanceData .= '{"sno":"'  . $sno . '",';
        $totalAttendanceData .= '"rollno":"'   . $rollno   . '",';
        $totalAttendanceData .= '"classAttended":"'   . $classAttended  . '",';
        $totalAttendanceData .= '"percentage":"'   . $percentage  . '",';
        $totalAttendanceData .= '"totalClasses":"'. $totalClasses    . '"}';
    }

     $totalAttendanceData ='{"records":['.$totalAttendanceData.']}';

   } else {
     $totalAttendanceData = "No results found.";
   }

  echo($totalAttendanceData);
 ?>
