<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $rollno = $data['rollno'];

  $query = mysqli_query($conn,"delete from student where rollno = '$rollno'");
  if ($query) {
    echo "student removed successfully.";
  } else {
    echo "student not removed";
  }
 ?>
