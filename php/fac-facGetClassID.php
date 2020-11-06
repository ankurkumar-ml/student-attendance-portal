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
  $res = mysqli_query($conn,"select class_id from class where subject_name='$subject_name' && subject_code='$subject_code' && course='$course' && branch='$branch' && year='$year' && sem='$sem' && fid='$fid'");
  if (mysqli_num_rows($res)!=0) {
    while ($row = mysqli_fetch_array($res)) {
      $classID = $row['class_id'];
    }
  }
  echo $classID;
 ?>
