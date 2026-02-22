// Hitung Rata-rata Siswa
let siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
];

let ratarata = siswa.reduce((total, s) => total + s.nilai, 0) / siswa.length;
console.log(`ratarata: ${ratarata}`);

let cekNilai = siswa.filter((n) => n.nilai > ratarata);
console.log(` Nilai di atas rata-rata: `, cekNilai);
