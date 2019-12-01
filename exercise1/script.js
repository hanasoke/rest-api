const food = {
    name: "Tori Ball",
    harga: 30.000,
    kandungan: "Daging Ayam",
    Gizi: {
        Kalori: "250 kkal",
        Protein: "7 g",
        Lemak: "14 g",
        Karbohidrat: "15 g",
        Natrium: "570 mg"
    }
}

// console.log(food);

// mengubah object menjadi json
// console.log(JSON.stringify(food));

// mengubah json menjadi object

// menggunakan vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let saka = JSON.parse(this.responseText);
//         console.log(saka);
//     }
// }

// xhr.open('GET', 'try.json', true);
// xhr.send();

// menggunakan jquery

$.getJSON('try.json', function (data) {
    console.log(data);
});