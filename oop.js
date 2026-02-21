class Mahasiswa {
  prodi = "FIKTI";
  constructor(nama, nilai) {
    console.log(`inislisasi data ${nama}`);
    this.nama = nama;
    this.nilai = nilai;
  }
  halo() {
    console.log(`hallo nama saya ${this.nama} dari prodi ${this.prodi}`);
  }

  lulus() {
    if (this.nilai >= 75) {
      console.log(`${this._nama} Lulus dengan nilai ${this.nilai}`);
    } else {
      console.log(`${this._nama} Tidak Lulus dengan nilai ${this.nilai}`);
    }
  }

  get nama() {
    return this._nama.toUpperCase();
  }

  set nama(value) {
    if (value.length < 3) {
      console.log("nama anda kurang panjang");
      return;
    }
    this._nama = value;
  }
}

const mhs1 = new Mahasiswa("oca", 90);
const mhs2 = new Mahasiswa("ara", 70);

mhs2.nama = "zahraa";
mhs2.halo();
