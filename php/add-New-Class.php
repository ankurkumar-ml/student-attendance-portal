<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $subject_name = test_input($data['subject_name']);
  $subject_code = test_input($data['subject_code']);
  $course = test_input($data['course']);
  $branch = test_input($data['branch']);
  $year = test_input($data['year']);
  $semester = test_input($data['semester']);
  $fid = test_input($data['fid']);

  $sql1 = mysqli_query($conn,"select * from class where subject_code = '$subject_code'");
  if (mysqli_num_rows($sql1)!=0) {
    echo "Class is already registered.";
  }
  else {

  $sql2 = "insert into class (subject_name,subject_code,course,branch,year,sem,fid) values ('$subject_name','$subject_code','$course','$branch','$year','$semester','$fid')";
  if (mysqli_query($conn,$sql2)) {
    echo "Class added successfully.";
  } else {
    echo "class not added.";
  }

}
  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
 ?>
