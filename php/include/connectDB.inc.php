<?php

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "arm_control";

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

if (mysqli_connect_errno()) {
    echo 'Failed to connect to MySQL' . mysqli_connect_errno();
}
