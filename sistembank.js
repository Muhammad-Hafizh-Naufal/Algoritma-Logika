class BankAccount {
  constructor(nama, saldo) {
    this.nama = nama;
    this.saldo = saldo;
  }

  ceksaldo() {
    return `saldo saat ini: ${this.saldo}`;
  }

  setor(s) {
    return (this.saldo += s);
  }

  tariktunai(s) {
    return this.saldo >= s ? (this.saldo -= s) : "Saldo tidak cukup";
  }
}

let nasabah1 = new BankAccount("nopal", 100);
console.log(nasabah1.tariktunai(20));
console.log(nasabah1.ceksaldo());
