console.log("Algoritma & Logika");
console.log("-------------------");
let siswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 65 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 70 },
];

// nama
let nama = siswa.map((s) => s.nama);

for (let n of nama) {
  console.log(n);
}

// total nilai
let total = siswa.reduce((total, item) => total + item.nilai, 0);
console.log(`total seluruh nilai siswa: ${total}`);

// nilai di atas 75
let kkm = siswa.filter((siswa) => siswa.nilai >= 75);
for (let n of kkm) {
  console.log(`nilai di atas 75: ${n.nama} dengan nilai ${n.nilai}`);
}

let hasil = siswa.map((s) => {
  return {
    nama: s.nama,
    status: s.nilai >= 75 ? "lulus" : "tidak lulus",
  };
});

console.log(hasil);
