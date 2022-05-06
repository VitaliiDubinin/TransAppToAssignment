<?php 
/***
 * Database connection using PDO
 * 
 */

class DBVoccon {
private $server = 'db';
private $dbnamevocdb='VocabDB';
private $user='root';
private $pass='lionPass';






public function connect (){
try {
$conn = new PDO ('mysql:host=' .$this->server .';dbname='. $this->dbnamevocdb,
$this->user, $this->pass);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// echo "  Database Connect Success: ";
return $conn;

} catch (\Exception $e){
    echo "Database Errror: " . $e->getMessage();
}



}
 }

 ?>