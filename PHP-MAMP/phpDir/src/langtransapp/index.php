<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

include './DBVoccon.php';

$objectDB=new DBVoccon;
$conn=$objectDB->connect();


// $sql = "SELECT * FROM phptaskvd";
// $stmt = $conn->prepare($sql);
// $stmt->execute();
// $words=$stmt->fetchAll(PDO::FETCH_ASSOC);


?>





<?php

// $word = file_get_contents('php://input');
    // $word=json_decode(file_get_contents('php://input'));
// var_dump($word);

$method=$_SERVER['REQUEST_METHOD'];

switch($method){


case "POST":

    // $word = file_get_contents('php://input');
    // var_dump($word);
    $word=json_decode(file_get_contents('php://input'));
    // var_dump($word);
    print_r($word);

    // $sql="INSERT INTO `phptaskvd` (`or_word`, `tr_word`, `learned`) VALUES('','$word','')";

    // $sql="INSERT INTO phptaskvd(or_word, tr_word) VALUES(:or_word, :tr_word)";
    $sql="INSERT INTO phptaskvd(or_word, tr_word, learned) VALUES(:or_word, :tr_word,'')";
    // $sql="INSERT INTO phptaskvd(or_word, tr_word) VALUES(:or_word, :tr_word)";



$stmt=$conn->prepare($sql);
$stmt->bindParam(':or_word', $word->or_word);
$stmt->bindParam(':tr_word', $word->tr_word);
// $stmt->bindParam(':learned', $word->learned);

print_r($stmt);
$stmt->execute();

// if ($stmt->execute()){
// $response =['status'=> 1, 'message'=> 'Record created successfully.'];
// } else{
//     $response =['status'=> 0, 'message'=> 'Failed to insert or create record.'];  
// }
// echo json_encode($response);
break;



case "GET":
    $sql = "SELECT * FROM phptaskvd";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $words=$stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($words);
    break;

}

?>

