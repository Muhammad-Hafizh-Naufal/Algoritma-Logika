let mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra", nilai: 75 },
];

let penilaian = mahasiswa.map((mhs) => {
  let hasil = "";

  if (mhs.nilai >= 75) {
    hasil = "lulus";
  } else if (mhs.nilai >= 60) {
    hasil = "remedial";
  } else {
    hasil = "tidak lulus";
  }

  return {
    nama: mhs.nama,
    nilai: mhs.nilai,
    status: hasil,
  };
});

console.log(penilaian);
