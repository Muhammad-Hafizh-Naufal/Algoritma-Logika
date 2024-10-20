// Study Kasus
// Diberikan sebuah string, tugas kamu adalah untuk membalikkan urutan karakternya.
// Kamu perlu menuliskan sebuah fungsi yang menerima input berupa string,
// dan mengembalikan string yang dibalik.

function balikanString(str) {
  return `Sebelum di balik: ${str}\nSetelah di balik: ${str
    .split("")
    .reverse()
    .join("")}`;
}

let input = "TINUTINU";
console.log(balikanString(input));
