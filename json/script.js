// let students = {
//     name: "Hanas Bayu Pratama",
//     nim: "1820010087",
//     email: ["hanasoke@gmail.com", "hanasbayupratama@gmail.com", "hanasbp@gmail.com"]
// }

// // console.log(students);

// // mengubah object menjadi json
// console.log(JSON.stringify(students));


// mengubah json menjadi object

// menggunakan vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let students = JSON.parse(this.responseText);
//         console.log(students);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});