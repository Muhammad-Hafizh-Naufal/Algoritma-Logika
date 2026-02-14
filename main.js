console.log("Belajar JavaScript Dasar");
console.log("========================");

// start
// Latihan 1
for (let i = 1; i <= 6; i++) {
  let hasil = "";
  for (let j = 1; j < i; j++) {
    hasil += "*";
  }
  console.log(hasil);
}

// Latihan 2
let i = 1;
let total = 0;

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);
    total += i;
  }
  i++;
}
console.log(`Total Genap ${total}`);

// Latihan 3
let i = 1;
let hasil = 1;

while (i <= 5) {
  console.log(i);
  hasil *= i;
  i++;
}

console.log(hasil);
