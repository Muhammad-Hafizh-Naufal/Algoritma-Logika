console.log("Belajar JavaScript Dasar");
console.log("========================");

// start
let nilai = [80, 65, 90, 50, 75];
let total = 0;
let jumlahlulus = 0;
let tertinggi = nilai[0];

for (let i = 0; i < nilai.length; i++) {
  console.log(nilai[i]);

  if (nilai[i] >= 75) {
    jumlahlulus += 1;
  }

  if (nilai[i] >= tertinggi) {
    tertinggi = nilai[i];
  }

  total += nilai[i];
}

console.log(`total: ${total}`);
console.log(`total siswa lulus: ${jumlahlulus}`);
console.log(`nilai tertinggi: ${tertinggi}`);
console.log(`Rata-rata: ${total / nilai.length}`);
