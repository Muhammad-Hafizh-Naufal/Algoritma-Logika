let data = [
  { nama: "Andi", nilai: [80, 75, 90] },
  { nama: "Budi", nilai: [60, 70, 65] },
  { nama: "Citra", nilai: [95, 85, 100] },
];

let terbaik = data
  .map((siswa) => {
    const total = siswa.nilai.reduce((t, n) => t + n, 0);
    return {
      nama: siswa.nama,
      ratarata: total / siswa.nilai.length,
    };
  })
  .reduce((max, siswa) => (siswa.ratarata > max.ratarata ? siswa : max));

console.log(terbaik);
