console.log("Algoritma & Logika");
console.log("-------------------");
const siswa = [
  { nama: "Andi", nilai: [80, 75, 90] },
  { nama: "Budi", nilai: [60, 70, 65] },
  { nama: "Citra", nilai: [95, 85, 100] },
  { nama: "Dina", nilai: [70, 72, 68] },
  { nama: "Eka", nilai: [88, 90, 84] },
];

let hitung = siswa.map((s) => {
  let total = s.nilai.reduce((total, n) => total + n, 0);
  let rata = total / s.nilai.length;

  return {
    nama: s.nama,
    ratarata: Math.ceil(rata),
  };
});
console.log(hitung);

let tertinggi = hitung.reduce((max, s) =>
  s.ratarata > max.ratarata ? s : max,
);
console.log("Tertinggi:", tertinggi);

let ranking = hitung.sort((max, n) => n.ratarata - max.ratarata);
console.log(`ranking : `, ranking);
