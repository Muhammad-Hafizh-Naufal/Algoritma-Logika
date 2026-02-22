// Total Belanja (Studi Kasus Keranjang)
let cart = [
  { nama: "Laptop", harga: 7000000, qty: 1 },
  { nama: "Mouse", harga: 200000, qty: 2 },
  { nama: "Keyboard", harga: 500000, qty: 1 },
];

let kalkulasi = cart.map((items) => {
  let totalbrg = items.qty * items.harga;

  return {
    nama: items.nama,
    qty: items.qty,
    totalbrg: totalbrg,
  };
});

let totalharga = kalkulasi.reduce((total, b) => total + b.totalbrg, 0);

let hargafinal = 0;
if (totalharga > 7000000) {
  hargafinal = totalharga - totalharga * 0.1;
}

console.log(kalkulasi);
console.log(`Total Harga ${totalharga}`);
console.log(`harga final : ${hargafinal}`);
