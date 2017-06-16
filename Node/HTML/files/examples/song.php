<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = new mysqli($servername, $username, $password, $dbname);
$key=$_GET["keyword"];
$sql = "select * from playlist where title LIKE'%$key%' OR album LIKE '%$key%' OR artist LIKE '%$key%' ;";

$result=mysqli_query($conn,$sql);

$song=array();
class songlist
{
 public $name = "";
}

$row=mysqli_fetch_assoc($result);
echo $row['filename'];

//echo "".json_encode($song);
//$conn->close();
?>
