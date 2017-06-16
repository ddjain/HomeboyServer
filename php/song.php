<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = new mysqli($servername, $username, $password, $dbname);
$key=$_GET["keyword"];
//$sql = "select * from playlist where title LIKE'%$key%' OR album LIKE '%$key%' OR artist LIKE '%$key%' ;";
//$sql= "select filename from playlist where count= (select max(count) from playlist where title LIKE'%$key%' OR album LIKE '%$key%' OR artist LIKE '%$key%')";
$sql="SELECT * FROM `playlist` WHERE title LIKE'%$key%' OR album LIKE '%$key%' OR artist LIKE '%$key%' ORDER BY count DESC LIMIT 1";
$result=mysqli_query($conn,$sql);

$song=array();
class songlist
{
 public $name = "";
}

$row=mysqli_fetch_assoc($result);
$fn=$row['filename'];
echo $fn;

$sql="UPDATE `playlist` SET `count`=count+1 WHERE filename='$fn'";
$result=mysqli_query($conn,$sql);

//echo "".json_encode($song);
//$conn->close();
?>
