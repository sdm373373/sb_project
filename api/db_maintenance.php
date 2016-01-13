<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    $sql = "DELETE 
            FROM sadlerpr_swagbucks.user_uptime
            WHERE timestamp < DATE_SUB(NOW(), INTERVAL 5 DAY);";

    //echo "<pre>$sql</pre>";
    
    $result1 = $conn->query($sql);
    
    
    
    $sql = "DELETE 
            FROM sadlerpr_swagbucks.dailyprogress
            WHERE timestamp < DATE_SUB(NOW(), INTERVAL 1 DAY);";

    //echo "<pre>$sql</pre>";
    
    $result2 = $conn->query($sql);    
    
    if ($result1 === TRUE && $result2 === TRUE) {
            echo "{success:true}";
    } else {
            echo "{success:false, error:\"{$conn->error}\"}";
    }

    $conn->close();

?>