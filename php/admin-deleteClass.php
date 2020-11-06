<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $scode = $data['subject_code'];

  $query = mysqli_query($conn,"delete from class where subject_code = '$scode'");
  if ($query) {
    echo "class removed successfully.";
  } else {
    echo "class not removed";
  }
 ?>
