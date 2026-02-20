console.log("Belajar JavaScript Dasar");
console.log("========================");

let cart = [
  { nama: "Laptop", harga: 7000000, qty: 1 },
  { nama: "Mouse", harga: 200000, qty: 2 },
  { nama: "Keyboard", harga: 500000, qty: 1 },
  { nama: "Monitor", harga: 3000000, qty: 2 },
];

let totalharga = cart.reduce((total, b) => total + b.qty * b.harga, 0);
console.log(`Total Belanja: `, totalharga);

let totalqty = cart.map((item) => {
  return {
    nama: item.nama,
    qty: item.qty,
    item: item.harga * item.qty,
  };
});

for (let n of totalqty) {
  console.log(`${n.nama} (x${n.qty}) - ${n.item}`);
}

let harting = [...totalqty].sort((a, b) => b.item - a.item).slice(0, 1);
for (let n of harting) {
  console.log(`Barang Termahal: ${n.nama} - ${n.item}`);
}
