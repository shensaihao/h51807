<?php
	header("Access-Control-Allow-Origin:*");
	include("config/connect.php");
	
	$sql="select * from product_information";
	$res = mysql_query($sql);
	
	$arr = array();
	while($row = mysql_fetch_assoc($res)){
		array_push($arr,$row);
	}

	echo json_encode($arr);
	
	mysql_close();
?>