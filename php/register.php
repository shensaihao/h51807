<?php
	header("Access-Control-Allow-Origin:*");
	include("config/connect.php");
	$username = $_POST["username"];
	$email = $_POST["email"];
	$password = $_POST["password"];
	$phonenum = $_POST["phonenum"];
	
	$sqlCheck = "select * from register_login where phonenum='$phonenum'";
	$res = mysql_query($sqlCheck);
	$row = mysql_num_rows($res);
	if($row){
		echo '{"exist" : 1 }';
	}else{
		$sql = "insert into register_login (username,email,password,phonenum) value ('$username','$email','$password','$phonenum')";
	
		$isSucc = mysql_query($sql);
		if($isSucc){
			echo '{"code" : 1}';
		}else{
			echo '{"code" : 0}';
		}
	}
//	/echo "333";
	
	
	mysql_close();
?>