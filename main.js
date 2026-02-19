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

let siswaIpa = [...siswa].filter((s) => s.jurusan === "IPA");
console.log(siswaIpa);

let siswaIps = [...siswa].filter((s) => s.jurusan === "IPS");
console.log(siswaIps);
