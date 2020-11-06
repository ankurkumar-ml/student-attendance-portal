<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

    $fid = $data['fid'];
    $course = $data['course'];
    $branch = $data['branch'];
    $year = $data['year'];
    $sem = $data['sem'];

  $subject_query = mysqli_query($conn,"select class_id,subject_name,subject_code from class where fid = '$fid' && course='$course' && branch = '$branch' && year='$year' && sem='$sem'");

  if (mysqli_num_rows($subject_query)!=0) {
    $msg1 = "";
    while ($rows = mysqli_fetch_array($subject_query)) {
      $subject_code = $rows['subject_code'];
      $subject_name = $rows['subject_name'];
      $class_id = $rows['class_id'];

      if ($msg1 != "") {$msg1 .= ",";}
        $msg1 .= '{"subject_name":"'  . $subject_name . '",';
        $msg1 .= '"class_id":"'   . $class_id   . '",';
        $msg1 .= '"subject_code":"'. $subject_code    . '"}';
    }
    //$msg ='{"records1":['.$msg.']}';
  } else {
    $msg1 = "There are no subjects found.";
  }
  //echo ($msg);
/*
  $student_query = mysqli_query($conn,"select name,rollno from student where course='$course' && branch = '$branch' && year='$year' && sem='$sem'");

  if (mysqli_num_rows($student_query)!=0) {
    $msg2="";
    while ($rows = mysqli_fetch_array($student_query)) {
      $rollno = $rows['rollno'];
      $name = $rows['name'];

      if ($msg2 != "") {$msg2 .= ",";}
        $msg2 .= '{"name":"'  . $name . '",';
        $msg2 .= '"rollno":"'. $rollno    . '"}';
    }
    $msg = ""; */
    $msg ='{"records1":['.$msg1.']}';
  //  $msg .='"records2":['.$msg2.']}';
  //} else {
    //$msg = "there are no students in this course.";
  //}

//  $student = json_encode($student_record);
  echo ($msg);

 ?>
