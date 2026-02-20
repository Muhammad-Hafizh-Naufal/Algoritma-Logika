let siswa = [
  { nama: "Andi", nilai: [80, 75, 90] },
  { nama: "Budi", nilai: [60, 70, 65] },
  { nama: "Citra", nilai: [95, 85, 100] },
  { nama: "Dina", nilai: [70, 72, 68] },
];

let hitung = siswa.map((item) => {
  let total = item.nilai.reduce((acc, curr) => acc + curr, 0);
  let rata = total / item.nilai.length;

  return {
    nama: item.nama,
    rataRata: Math.ceil(rata),
    status: rata >= 75 ? "Lulus" : "Tidak Lulus",
  };
});

let ranking = hitung.sort((a, b) => {
  return b.rataRata - a.rataRata;
});

console.log(hitung);
console.log(ranking);
