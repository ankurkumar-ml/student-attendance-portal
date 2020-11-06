<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $rollno = $data['rollno'];
  $name = $data['name'];
  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];
  $email = $data['email'];
  $password = $data['password'];

  $UpdateQuery = "update student set name = '$name', course = '$course', branch = '$branch', year = '$year', sem = '$sem', email = '$email' where rollno = '$rollno'";
  if (mysqli_query($conn,$UpdateQuery)) {
    echo "Updated successfully.";
  } else {
    echo "Student profile not updated.";
  }
 ?>
