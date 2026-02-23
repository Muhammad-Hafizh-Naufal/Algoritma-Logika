let data = [
  { nama: "Andi", nilai: [80, 75, 90] },
  { nama: "Budi", nilai: [60, 70, 65] },
  { nama: "Citra", nilai: [95, 85, 100] },
];

let rata = data.map((siswa) => {
  let total = siswa.nilai.reduce((t, n) => t + n, 0) / siswa.nilai.length;

  return {
    nama: siswa.nama,
    ratarata: Math.ceil(total),
  };
});
console.log(rata);

let nilaiTerbesar = rata.reduce((max, siswa) => {
  return siswa.ratarata > max.ratarata ? siswa : max;
});

console.log(nilaiTerbesar);
