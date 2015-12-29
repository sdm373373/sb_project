<?php

    include $_SERVER['DOCUMENT_ROOT'] . "/config/db.php";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
            die("{success:false, error:\"{$conn->connect_error}\"}");
    } 

    $sql = "SELECT *
            FROM sadlerpr_swagbucks.last5days";

    $result = $conn->query($sql);
    
    $response = new stdClass();
    $response->success = $result->num_rows > 0;

    if ($result->num_rows > 0) {
        // output data of each row
        $rows = Array();
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        
        $response->data = $rows;
    } else {
        $response->msg = "No results returned";
    }
    
    echo json_encode($response);

    $conn->close();

?>
