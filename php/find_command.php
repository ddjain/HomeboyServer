<?php

$maxId=0;
$count=0;
$maxCount=0;


$cmd=$_REQUEST["cmd"];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "select * from commands;";

$result=mysqli_query($conn,$sql);

while($row=mysqli_fetch_assoc($result))
{
	
	$qry=$row['keyword'];
	$id=$row['id'];
    $count=findRelevantKeyword($cmd,$qry);
 
  if($count>$maxCount)
  {
      $maxCount=$count;
      $maxId=$id;
  }
  
         
}


if($maxId==5)
{
    
$sql = "UPDATE `status` SET `state`=1 WHERE `device`='DOOR'";
mysqli_query($conn, $sql);
echo "Opening the door";
}
else if($maxId==6)
{
    
$sql = "UPDATE `status` SET `state`=0 WHERE `device`='DOOR'";
mysqli_query($conn, $sql);
echo "Closing thee door..";
}
else if($maxCount<3)
{

echo "$maxCount";
    die("NO COMMAND FOUND");
}

//update session_status
if($maxId==1)
{
$sql = "UPDATE `status` SET `state`=1 WHERE `device`='light 1'";
mysqli_query($conn, $sql);
echo "turning on the light 1";
}
else if($maxId==2)
{

$sql = "UPDATE `status` SET `state`=0 WHERE `device`='light 1'";
mysqli_query($conn, $sql);

echo "turning off the light 1";
}
else if($maxId==3)
{
$sql = "UPDATE `status` SET `state`=1 WHERE `device`='fan'";
mysqli_query($conn, $sql);
echo "turning on the fan ";
}
else if($maxId==4)
{
$sql = "UPDATE `status` SET `state`=0 WHERE `device`='fan'";
mysqli_query($conn, $sql);
echo "turning on the off ";
}

else if($maxId==5)
{
$sql = "UPDATE `status` SET `state`=0 WHERE `device`='DOOR'";
mysqli_query($conn, $sql);
echo "turning on the off ";
}

else if($maxId==6)
{
$sql = "UPDATE `status` SET `state`=1 WHERE `device`='DOOR'";
mysqli_query($conn, $sql);
echo "turning on the off ";
}



//selecting query whos maximum keyword matched



$sql = "select * from commands where id=$maxId;";

$result=mysqli_query($conn,$sql);



while($row=mysqli_fetch_assoc($result))
{
	
	$action=$row['action'];
    echo $action;   
  header("Location:".$action);      
}











    function findRelevantKeyword($cmd,$qry){
    $count=0;
    $arr1=array();
                $arr2=array();

                $arr1=explode(" ",$cmd);
                $arr2=explode(" ",$qry);

                for($i=0;$i<count($arr1);$i++)
                { 
                    for($j=0;$j<count($arr2);$j++)
                    {
                        if($arr1[$i]==$arr2[$j])
                        {
                            $count++;
                        }
                    }     
                }
    return $count;
    }












?>