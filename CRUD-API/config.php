<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET, POST, OPTIONS, PATCH, PUT, DELECT, DELETE');
header('Access-Control-Allow-Headers:token, Content-Type');
header('Access-Control-Max-Age:1728000');
header('Content-Length:0');
header('Content-Type:text/plain');
header("Content-Type:application/json");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "Project22";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection Database failed: ". $conn->connect_error);
}

?>