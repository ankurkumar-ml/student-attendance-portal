<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $classID = $data['classID'];
  $subject_name =$data['subject_name'];
  $subject_code = $data['subject_code'];
  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];
  $fid = $data['fid'];

  $UpdateQuery = "update class set subject_name = '$subject_name', subject_code = '$subject_code', course = '$course', branch = '$branch', year = '$year', sem = '$sem', fid = '$fid' where class_id = '$classID'";
  if (mysqli_query($conn,$UpdateQuery)) {
    echo "Updated successfully.";
  } else {
    echo "Class not updated.";
  }
 ?>
