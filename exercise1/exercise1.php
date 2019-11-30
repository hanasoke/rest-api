<?php 

$data = file_get_contents('try.json');

// berubah jadi object
// $saka = json_decode($data);

// berubah jadi array
$saka = json_decode($data, true);

// var_dump($saka);

// echo $saka[1]["kandungan"];
echo "Kalori dalam makanan " . $saka[2]["menu"] . " adalah " . $saka[2]["Informasi Nilai Gizi"]["Kalori"];

echo "<br>";

$desc = "Protein dalam makanan ";
$beef = $saka[1]["menu"];
$gizi = $saka[1]["Informasi Nilai Gizi"]["Protein"];
$between = " adalah ";

print $desc . $beef . $between . $gizi;

