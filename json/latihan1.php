<?php

// $mahasiswa = [
//     [
//         "nama" => "Hanas Bayu Pratama",
//         "nim" => "180020087",
//         "email" => ["hanasoke@gmail.com", "hanasbayupratama@gmail.com", "hanasbp@gmail.com"]
//     ],
//     [
//         "nama" => "Risiasi",
//         "nim" => "180020023",
//         "email" => "rizqelfarisi@yahoo.com"
//     ]
// ];

// var_dump($mahasiswa);

// mengubah array menjadi json
// $data = json_encode($mahasiswa);
// echo $data;

$dbh = new PDO('mysql:host=localhost;dbname=phpbasic','root','');
$db = $dbh->prepare('SELECT * FROM students');
$db->execute();
$students = $db->fetchAll(PDO::FETCH_ASSOC);

// mengubah array menjadi json
$data = json_encode($students);
echo $data;

