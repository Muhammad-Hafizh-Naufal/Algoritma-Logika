let Products = [
  {
    id: 1,
    name: "Parfum Jasmine",
    price: 250000,
    category: "Parfum",
    stock: 20,
    description: "Parfum dengan aroma bunga jasmine yang tahan lama",
    image: "jasmine.jpg",
  },
  {
    id: 2,
    name: "Parfum Vanilla",
    price: 300000,
    category: "Parfum",
    stock: 15,
    description: "Parfum dengan aroma vanilla manis dan lembut",
    image: "vanilla.jpg",
  },
  {
    id: 3,
    name: "Parfum Citrus",
    price: 200000,
    category: "Parfum",
    stock: 10,
    description: "Parfum dengan aroma citrus yang segar",
    image: "citrus.jpg",
  },
  {
    id: 4,
    name: "Smartphone XYZ",
    price: 5000000,
    category: "Teknologi",
    stock: 5,
    description: "Smartphone terbaru dengan layar AMOLED dan prosesor cepat",
    image: "smartphone_xyz.jpg",
  },
  {
    id: 5,
    name: "Laptop ABC",
    price: 12000000,
    category: "Teknologi",
    stock: 3,
    description: "Laptop high-end untuk kebutuhan gaming dan kerja berat",
    image: "laptop_abc.jpg",
  },
  {
    id: 6,
    name: "Smartwatch DEF",
    price: 2500000,
    category: "Teknologi",
    stock: 10,
    description: "Smartwatch dengan fitur kesehatan dan notifikasi pintar",
    image: "smartwatch_def.jpg",
  },
];

// Fitur Seacrh
function cari(input) {
  let cari = Products.find((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  if (cari) {
    console.log(`${cari.name} ${cari.category}`);
  } else {
    console.log("Data tidak ditemukan");
  }
}

console.log("===================================");
console.log("Daftar Produk");
Products.map((items, index) => {
  console.log(`${index + 1}. ${items.name}`);
});

console.log("===================================");

let input = prompt("Masukkan nama produk: ");
cari(input);
