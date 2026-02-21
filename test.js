console.log("Belajar JavaScript Dasar");
console.log("=============================================");

const cart = [
  { nama: "Laptop", harga: 7000000, qty: 1 },
  { nama: "Mouse", harga: 200000, qty: 2 },
  { nama: "Keyboard", harga: 500000, qty: 1 },
  { nama: "Monitor", harga: 3000000, qty: 2 },
];

let items = cart.map(({ nama, harga, qty }) => ({
  nama,
  harga,
  qty,
  total: harga * qty,
}));

items.forEach(({ nama, qty, total }) => {
  console.log(`${nama} ${qty} ${total}`);
});

let itemtermahal = items.reduce((max, item) =>
  item.total > max.total ? item : max,
);

console.log(itemtermahal);
