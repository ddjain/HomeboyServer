<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$arr=array();
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM `status` WHERE 1";
$result = mysqli_query($conn, $sql);


    while($row = mysqli_fetch_assoc($result)) {
        $a=new dev();
        $a->device = $row["device"];
           $a->status = $row["state"];
array_push($arr,$a);
}
echo json_encode($arr);
mysqli_close($conn);



 class dev {
      public $device = "";
      public $status  = "";
   }

?>
