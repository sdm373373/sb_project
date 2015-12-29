<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Example: http://sb.sadlerproducts.com/api/dailygoal.php?mbid=6865807&date=2015-12-25&sb=150&goal1=22&bonus1=2&goal2=800&bonus2=82

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    $sql = "INSERT INTO sadlerpr_swagbucks.dailygoals (mbid, date, swagbucks, goal1, bonus1, goal2, bonus2)
            VALUES ({$_GET['mbid']}, '{$_GET['date']}', {$_GET['sb']}, {$_GET['goal1']}, {$_GET['bonus1']}, {$_GET['goal2']}, {$_GET['bonus2']})";

    //echo "<pre>$sql</pre>";

    if ($conn->query($sql) === TRUE) {
            echo "{success:true}";
    } else {
            echo "{success:false, error:\"{$conn->error}\"}";
    }

    $conn->close();

?>