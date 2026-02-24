let data = [
  {
    name: "Produk A",
    harga: 100000,
    qty: 2,
  },
  {
    name: "Produk B",
    harga: 50000,
    qty: 1,
  },
  {
    name: "Produk C",
    harga: 200000,
    qty: 3,
  },
];

let subtotal = data.map((items) => {
  return {
    ...items,
    total: items.harga * items.qty,
  };
});

let totalbelanja = subtotal.reduce((total, b) => total + b.total, 0);
let barangtermahal = [...subtotal]
  .sort((a, b) => b.total - a.total)
  .splice(0, 1);

let diskon = 0;
if (totalbelanja > 500000) {
  diskon = totalbelanja - totalbelanja * 0.1;
}

console.log(subtotal);
console.log(`total harga barang: ${totalbelanja}`);
console.log("subtotal termahal:", barangtermahal);
console.log(`total harga setelah diskon: ${diskon}`);
