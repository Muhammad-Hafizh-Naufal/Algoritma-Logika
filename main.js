console.log("Belajar JavaScript Dasar");
console.log("========================");

// start

let siswa = [
  { nama: "Budi", nilai: 80 },
  { nama: "Ani", nilai: 65 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dedi", nilai: 75 },
  { nama: "Eka", nilai: 88 },
];

for (let n of siswa) {
  console.log(n.nama, n.nilai);
}

function namalulus() {
  let lulus = siswa
    .filter((s) => s.nilai >= 75)
    .map((s) => ({ nama: s.nama, nilai: s.nilai }));

  for (let n of lulus) {
    console.log(`siswa lulus: ${n.nama} dengan nilai: ${n.nilai}`);
  }
}

namalulus();
