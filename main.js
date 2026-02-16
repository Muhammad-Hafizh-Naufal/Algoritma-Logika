console.log("Belajar JavaScript Dasar");
console.log("========================");

// start
let nilai = [80, 65, 90, 50, 75, 88, 92, 60];

let tidakLulus = nilai.filter((n) => n < 75);
let lulus = nilai.filter((n) => n >= 75);

let total = nilai.reduce((acc, n) => acc + n, 0);
let rata = total / nilai.length;

let kategori =
  rata >= 85
    ? "Kelas Sangat Baik"
    : rata >= 75
      ? "Kelas Baik"
      : "Kelas Perlu Evaluasi";

console.log("Tidak Lulus:", tidakLulus);
console.log("Jumlah Lulus:", lulus.length);
console.log("Rata-rata:", rata);
console.log("Kategori:", kategori);
