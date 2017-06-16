<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$cnt=0;
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
$sql="select * from login";
$result = mysqli_query($conn, $sql);
while($row=mysqli_fetch_assoc($result))
{
    if($_GET["pws"]==$row["token"])
    {
       $cnt=1;             
    }
}
echo $cnt;
?>