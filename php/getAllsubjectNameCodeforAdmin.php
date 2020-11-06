<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $course = $data['course'];
  $branch = $data['branch'];
  $year = $data['year'];
  $sem = $data['sem'];

  $Query = mysqli_query($conn,"select subject_name, subject_code from class where course = '$course' && branch = '$branch' && year = '$year' && sem = '$sem'");

  if (mysqli_num_rows($Query)!=0) {
    $msg = "";
    while ($rows = mysqli_fetch_array($Query)) {
      $subject_name = $rows['subject_name'];
      $subject_code = $rows['subject_code'];

      if ($msg != "") {$msg .= ",";}

      $msg .= '{ "subject_name": "' .$subject_name. '",';
      $msg .= '"subject_code": "' .$subject_code. '"}';
    }
    $msg = '{"PHPSubjectNameCode": ['.$msg.']}';
  } else {
    $msg = "subject name and subject code not found.";
  }
  echo ($msg);
 ?>
