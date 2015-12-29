<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Example: http://sb.sadlerproducts.com/api/dailyprogress.php?mbid=6865807&sb=150&goal1=22&bonus1=2&goal2=800&bonus2=82

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    // NOW() returns -1 from EST.  So subtract 2 more hours since swagbucks in PST.
    $sql = "INSERT INTO sadlerpr_swagbucks.dailyprogress (mbid, swagbucks, goal1, bonus1, goal2, bonus2, timestamp)
            VALUES ({$_GET['mbid']}, {$_GET['sb']}, {$_GET['goal1']}, {$_GET['bonus1']}, {$_GET['goal2']}, {$_GET['bonus2']}, DATE_SUB(NOW(), INTERVAL 2 HOUR))";

    //echo "<pre>$sql</pre>";

    if ($conn->query($sql) === TRUE) {
            echo "{success:true}";
    } else {
            echo "{success:false, error:\"{$conn->error}\"}";
    }

    $conn->close();

?>