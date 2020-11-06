<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $name = test_input($data['name']);
  $rollno = test_input($data['rollno']);
  $course = test_input($data['course']);
  $branch = test_input($data['branch']);
  $year = test_input($data['year']);
  $sem = test_input($data['semester']);
  $email = test_input($data['email']);
  $password = test_input($data['password']);
  $date = test_input($data['date']);

  $checkQuery = mysqli_query($conn,"select * from student where rollno='$rollno'");

  if (mysqli_num_rows($checkQuery)!=0) {
    echo "Already Registered.";
  } else {
    $query = "insert into student (name,rollno,course,branch,year,sem,email,password,date) values ('$name','$rollno','$course','$branch','$year','$sem','$email','$password','$date')";
    if (mysqli_query($conn,$query)) {
      echo "Registration completed successfully.";
    } else {
      echo "Registration not completed.";
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
