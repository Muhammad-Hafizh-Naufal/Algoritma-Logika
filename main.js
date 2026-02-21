console.log("Belajar JavaScript Dasar");
console.log("=============================================");

let cart = [
  { nama: "Laptop", harga: 7000000, qty: 1 },
  { nama: "Mouse", harga: 200000, qty: 2 },
  { nama: "Keyboard", harga: 500000, qty: 1 },
  { nama: "Monitor", harga: 3000000, qty: 2 },
];

let totalitem = cart.map((item) => {
  return {
    nama: item.nama,
    qty: item.qty,
    item: item.harga * item.qty,
  };
});

for (let n of totalitem) {
  console.log(`${n.nama} (x${n.qty}) - ${n.item}`);
}

let harting = [...totalitem].sort((a, b) => b.item - a.item).slice(0, 1);
for (let n of harting) {
  console.log(`Barang Termahal: ${n.nama} - ${n.item}`);
}

console.log("=============================================");

function hitungcart(c) {
  let totalqty = c.reduce((total, b) => total + b.qty, 0);
  // console.log(`Total Qty: ${totalqty}`);

  let totalharga = c.reduce((total, b) => total + b.qty * b.harga, 0);
  // console.log(`Total Belanja: `, totalharga);

  let diskon = totalharga > 10000000 ? totalharga * 0.1 : 0;

  let setelahDiskon = totalharga - diskon;
  // console.log("Setelah Diskon:", setelahDiskon);

  let pajak = setelahDiskon * 0.11;

  let totalAkhir = setelahDiskon + pajak;
  // console.log("Total Akhir + pajak 11%:", totalAkhir);

  return {
    totalqty: totalqty,
    totalharga: totalharga,
    setelahDiskon: setelahDiskon,
    totalAkhir: totalAkhir,
  };
}

console.log(hitungcart(cart));
