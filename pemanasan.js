let data = [
  { nama: "laptop", stok: 5 },
  { nama: "mouse", stok: 20 },
  { nama: "keyboard", stok: 15 },
  { nama: "monitor", stok: 3 },
  { nama: "usb hub", stok: 0 },
  { nama: "type c", stok: 0 },
];

let transaksi = [
  { nama: "laptop", stok: 2 },
  { nama: "mouse", stok: 5 },
  { nama: "monitor", stok: 1 },
];

let newstock = data
  .map((item) => {
    let transaksiItem = transaksi.find((t) => t.nama === item.nama);
    return {
      ...item,
      stok: item.stok - (transaksiItem ? transaksiItem.stok : 0),
    };
  })
  .filter((item) => item.stok > 0);

let cekstock = newstock.filter((items) => items.stok < 5);
let totalstok = newstock.reduce((total, s) => total + s.stok, 0);
let newitem = newstock.push({ nama: "printer", stok: 7 });

console.log("update stok;", newstock);
console.log("stok dibawah 5:", cekstock);
console.log("total stok: ", totalstok);
