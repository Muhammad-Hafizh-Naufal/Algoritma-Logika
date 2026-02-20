console.log("Belajar JavaScript Dasar");
console.log("========================");

// start
let siswa = [
  { nama: "Budi", jurusan: "IPA", nilai: 80 },
  { nama: "Ani", jurusan: "IPS", nilai: 65 },
  { nama: "Citra", jurusan: "IPA", nilai: 90 },
  { nama: "Dedi", jurusan: "IPS", nilai: 75 },
  { nama: "Eka", jurusan: "IPA", nilai: 88 },
  { nama: "Fajar", jurusan: "IPS", nilai: 92 },
];

// Tampilkan hanya siswa jurusan IPA
let siswaIpa = [...siswa].filter((s) => s.jurusan === "IPA");
console.log(siswaIpa);

// Hitung rata-rata nilai jurusan IPS saja
let siswaIps = [...siswa].filter((s) => s.jurusan === "IPS");
let ratarata = [...siswaIps].reduce((a, b) => a + b.nilai, 0) / siswaIps.length;
console.log(`rata rata Ips: ${ratarata}`);

// Cari siswa dengan nilai tertinggi dari semua jurusan
let tertinggi = [...siswa].reduce((max, b) => (max >= b.nilai ? max : b));
console.log(`siswa dengan nilai paling tinggi`, tertinggi.nama);

// ranking
let rank = [...siswa].sort((a, b) => b.nilai - a.nilai).slice(0, 3);
console.log(`ranking:`, rank);
