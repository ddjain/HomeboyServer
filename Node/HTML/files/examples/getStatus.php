<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM `status` WHERE 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
$st="OFF";
        if($row["state"]==1)
        {
            $st="ON";
        }
        echo  $row["device"]. " - " . $st. "<br> <br>";
        
    }
} else {
    echo "0 results";
}

mysqli_close($conn);


?>
