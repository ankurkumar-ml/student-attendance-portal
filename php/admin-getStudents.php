<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $pageno = $data['pageno'];

  $sql = mysqli_query($conn, "select * from student");
  $totalRows = mysqli_num_rows($sql);
  $records_per_page = 5;

  //$data['pageno'] = 3;

//  if (isset($data['pageno'])) {

  //  }
  //else {
    //  $pageno = 1;
    //}
//echo $pageno;

  $totalPages = ceil($totalRows/$records_per_page);
  $offset = ($pageno-1)*$records_per_page;
  $sno = $offset;

  $sql2 = mysqli_query($conn,"select * from student limit $offset, $records_per_page");
  if (mysqli_num_rows($sql2)!=0) {

       $msg = "";
       while ($rows = mysqli_fetch_array($sql2)) {
         $rollno = $rows['rollno'];
         $name = $rows['name'];
         $sno++;

         if ($msg != "") {$msg .= ",";}
         $msg .= '{"rollno":"'  . $rollno . '",';
         $msg .= '"name":"'   . $name        . '",';
        // $msg .= '"pageno":"'   . $pageno        . '",';
         $msg .= '"totalPages":"'   . $totalPages        . '",';
         $msg .= '"sno":"'. $sno  . '"}';
       }
       $msg ='{"records":['.$msg.']}';
     } else {
       $msg = "There are no students.";
     }
     echo ($msg);

 ?>
