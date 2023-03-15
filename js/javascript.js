//variabel dan tipe data

//deklarasi variabel
var nama = "alien";
let umur = "20"
const panjang = 30;

//tipe data
let number = 34; //number
let teks = "hello world" //string
let boolean = true; //bolean antara 0 atau 1
let object = {nama: "alien", umur: 30}; //object

// 2.operator:
// operator aritmatika
let x = 33;
let y = 5;
let a = x + y; //penjumlahan
let b = x - y; //pengurangan
let c = x * y; //perkalian
let d = x / y; //pembagian
let e = x % y; //modulus

// operator perbandingan
let f = 1;
let g = 3;
console.log(f > g);     //true
console.log(f < g);     //false
console.log(f >= g);    //true
console.log(f <= g);    //false
console.log(f == g);    //false
console.log(f != g);    //true

//operator logika
let h = true;
let i = false;
console.log (h && i);   //end
console.log (h || i);   // or
console.log (!a);       //nagasi/kebalikan

//operator bitwise
let j = 00111100;
let k = 00001101;
console.log(i & k);
console.log(i | k);
console.log(i ^ k);

//pop up box

//alert
alert ("welcome again alien tamvan" + new Date());

//promt 
let response = prompt("sudah makan?");
alert ("jawaban anda:" + response);

//confirm
let responses = confirm("makan yok?");
alert ("jawabannya:" + responses);