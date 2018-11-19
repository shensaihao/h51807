<?php
	header("Access-Control-Allow-Origin:*");
	include("config/connect.php");
	$password = $_POST["password"];
	$phonenum = $_POST["phonenum"];
	
//	/echo "333";
	$sql = "select * from register_login where phonenum='$phonenum' and password='$password'";
	
	$res = mysql_query($sql);
	$arr = array();
	while($row=mysql_fetch_assoc($res)){
		array_push($arr,$row);
	}
	echo json_encode($arr);
	
	mysql_close();
?>