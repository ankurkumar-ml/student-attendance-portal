<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];


//  $sql = mysqli_query($conn, "select name,rollno from student where course='$course' && branch = '$branch' && year='$year' && sem='$sem'");

  $sno = 0;

  $student_query = mysqli_query($conn,"select name,rollno from student where course='$course' && branch = '$branch' && year='$year' && sem='$sem' ");

  if (mysqli_num_rows($student_query)!=0) {
    $totalrows = mysqli_num_rows($student_query);
    $msg2="";
    while ($rows = mysqli_fetch_array($student_query)) {
      $rollno = $rows['rollno'];
      $name = $rows['name'];
      $sno++;

      if ($msg2 != "") {$msg2 .= ",";}
        $msg2 .= '{"name":"'  . $name . '",';
        $msg2 .= '"sno":"'   . $sno   . '",';
        $msg2 .= '"totalrows":"'   . $totalrows  . '",';
        $msg2 .= '"rollno":"'. $rollno    . '"}';
    }
    $msg = "";
    //$msg .='{"records1":['.$msg1.'],';
    $msg .='{"records2":['.$msg2.']}';
  } else {
    $msg = "there are no students in this course.";
  }

//  $student = json_encode($student_record);
  echo ($msg);
 ?>
