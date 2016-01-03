<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Example: http://sb.sadlerproducts.com/api/bot_checkin.php?mbid=6865807

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    // NOW() returns -1 from EST.  So subtract 2 more hours since swagbucks in PST.
    $sql = "INSERT INTO sadlerpr_swagbucks.user_uptime (mbid, script, timestamp)
            VALUES ({$_GET['mbid']}, '{$_SERVER['HTTP_REFERER']}', DATE_SUB(NOW(), INTERVAL 2 HOUR))";

    //echo "<pre>$sql</pre>";

    if ($conn->query($sql) === TRUE) {
            echo "{success:true}";
    } else {
            echo "{success:false, error:\"{$conn->error}\"}";
    }

    $conn->close();

?>