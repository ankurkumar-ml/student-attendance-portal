<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $fid = $data['fid'];

  $query = mysqli_query($conn,"delete from faculty where f_id = '$fid'");
  if ($query) {
    echo "faculty removed successfully.";
  } else {
    echo "faculty not removed";
  }
 ?>
