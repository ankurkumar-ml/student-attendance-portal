<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  //$fid = $data['fid'];

  $query = mysqli_query($conn,"select f_id from faculty");
  if (mysqli_num_rows($query)!=0) {
    while($rows = mysqli_fetch_array($query)) {
      $data[] = $rows;
    }
  } else {
    $data[] = "there are no faculty id.";
  }

  echo json_encode($data);
 ?>
