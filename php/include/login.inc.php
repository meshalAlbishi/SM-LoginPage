<?php

include('./connectDB.inc.php');

if (isset($_POST['login'])) {

    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($_POST['login'] == "user") {
        
        $sql = "SELECT * FROM users where email='$email' and password='$password';";
        $result = mysqli_query($conn, $sql);

        echo $result->num_rows > 0 ? "200" : "404";
    }
}