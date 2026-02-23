let nilai = [
  { nama: "Andi", skor: 85 },
  { nama: "Budi", skor: 92 },
  { nama: "Citra", skor: 88 },
  { nama: "dita", skor: 88 },
];

let urutkan = [...nilai]
  .sort((max, n) => n.skor - max.skor)
  .map((siswa, index) => {
    return {
      ...siswa,
      ranking: index + 1,
    };
  });
console.log(urutkan);
