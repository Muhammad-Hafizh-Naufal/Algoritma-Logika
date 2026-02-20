let angka = [5, 10, 15, 20];

let hasil = angka.filter((a) => a >= 10);
let dikali = hasil.map((a) => a * 3);
let total = dikali.reduce((total, a) => total + a, 0);

console.log(hasil);
console.log(dikali);
console.log(total);
