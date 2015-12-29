<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Example: http://sb.sadlerproducts.com/api/current_sb.php?mbid=6865807&sb=150

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    $sql = "UPDATE sadlerpr_swagbucks.users
            SET current_swagbucks = {$_GET['sb']}
            WHERE mbid = {$_GET['mbid']}";

    //echo "<pre>$sql</pre>";

    if ($conn->query($sql) === TRUE) {
            echo "{success:true}";
    } else {
            echo "{success:false, error:\"{$conn->error}\"}";
    }

    $conn->close();

?>