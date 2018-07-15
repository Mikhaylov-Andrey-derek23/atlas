<?php
     const DB_NAME = 'u0511687_default';
     const DB_HOST = 'localhost';
     const DB_LOGIN = 'admin1';
     const DB_PASS = 'admin1';
 
     const DNS = "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8";

   

    $pdo = new PDO(DNS, DB_LOGIN, DB_PASS);

    $q = "SELECT * FROM `news_atlas` WHERE 1";
    
    $result = $pdo->query($q);
    
    $array_cat = [];

    while( $row = $result->fetch(PDO::FETCH_ASSOC) ){
        $array_cat[] = $row; 
    }
    echo json_encode($array_cat);
?>