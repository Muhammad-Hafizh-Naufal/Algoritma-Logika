console.log("====================Hewan=====================");

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  jalan() {
    console.log(`${this.nama} sedang berjalan`);
  }
}

class Burung extends Hewan {
  terbang() {
    console.log(`${this.nama} sedang terbang`);
  }
}

let kucing = new Hewan("Kucing oyen");
kucing.jalan();

let pipit = new Burung("Burung Pipit");
pipit.jalan();
pipit.terbang();
