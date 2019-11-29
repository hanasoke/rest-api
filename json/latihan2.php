<?php 

$data = file_get_contents('coba.json');

// berubah jadi object
// $students = json_decode($data);

// berubah jadi array
$students = json_decode($data, true);

var_dump($students);
echo $students[1]["pembimbing"]["pembimbing2"];