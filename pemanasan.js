// Cek Bilangan Ganjil / Genap
function cekAngka(n) {
  let cek = n % 2 === 0 ? "Angka Genap" : "Angka Ganjil";
  return cek;
}

console.log(cekAngka(2));
console.log(cekAngka(5));

// Hitung Total Arr
let angka = [10, 20, 30, 40];
function TotalArr(n) {
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += angka[i];
  }
  return total;
}
console.log(TotalArr(angka));

//  Balik String
function balikKata(kata) {
  let hasil = kata.split("").reverse().join("");
  return console.log(hasil);
}
balikKata("aku");
