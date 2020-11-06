<?php
  include("config.php");
  $json = file_get_contents("php://input");
  $data = json_decode($json,true);

  $pageno = $data['pageno'];

  $sql = mysqli_query($conn, "select * from class");
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

  $sql2 = mysqli_query($conn,"select * from class limit $offset, $records_per_page");
  if (mysqli_num_rows($sql2)!=0) {

       $msg = "";
       while ($rows = mysqli_fetch_array($sql2)) {
         $scode = $rows['subject_code'];
         $name = $rows['subject_name'];
         $classID = $rows['class_id'];
         $course = $rows['course'];
         $branch = $rows['branch'];
         $year = $rows['year'];
         $sem = $rows['sem'];
         $fid = $rows['fid'];
         $sno++;

         if ($msg != "") {$msg .= ",";}
         $msg .= '{"scode":"'  . $scode . '",';
         $msg .= '"name":"'   . $name        . '",';
         $msg .= '"classID":"'   . $classID     . '",';
         $msg .= '"course":"'   . $course      . '",';
         $msg .= '"branch":"'   . $branch   . '",';
         $msg .= '"year":"'   . $year     . '",';
         $msg .= '"sem":"'   . $sem      . '",';
         $msg .= '"fid":"'   . $fid     . '",';
         $msg .= '"totalPages":"'   . $totalPages        . '",';
         $msg .= '"sno":"'. $sno  . '"}';
       }
       $msg ='{"records":['.$msg.']}';
     } else {
       $msg = "There are no classes.";
     }
     echo ($msg);
 ?>
