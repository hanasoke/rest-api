<?php 

$saka = [[
    "menu" => "Chicken Katsu",
    "harga" => 30.000,
    "Kandungan" => "Daging Ayam",
    "Informasi Nilai Gizi" => [
        "Kalori" => "250, kkal",
        "Protein" => "20 g",
        "Lemak" => "7 g",
        "Karbohidrat" => "14 g",
        "Natrium" => "680 mg"
    ]
    ],
    [
        "menu" => "Chicken Tofu",
        "harga" => 20.000,
        "Kandungan" => "Daging Ayam",
        "Informasi Nilai Gizi" => [
            "Kalori" => "160, kkal",
            "Protein" => "14 g",
            "Lemak" => "10 g",
            "Karbohidrat" => "3 g",
            "Natrium" => "300 mg"
        ]
    ]
];

// var_dump($haka);

// mengubah array jadi json
// $data = json_encode($saka);
// print $data;

$dbh = new PDO('mysql:host=localhost;dbname=portfolio', 'root', '');

$db = $dbh->prepare('SELECT * FROM countries');

$db->execute();
$countries = $db->fetchAll(PDO::FETCH_ASSOC);

// mengubah array menjadi json
$data = json_encode($countries);
print $data;