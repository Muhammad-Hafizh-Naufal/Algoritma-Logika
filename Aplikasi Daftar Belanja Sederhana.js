let items = [];
let ulangi = "y";

console.log("Aplikasi Daftar Belanja Sederhana");
console.log("===================================");
console.log("Daftar Buah");
console.log("Apel");
console.log("Mangga");
console.log("Jeruk");

while (ulangi === "y") {
  let inputUser = prompt("Masukkan nama buah: ");

  switch (inputUser) {
    case "apel":
      items.push("Apel");
      break;
    case "mangga":
      items.push("Mangga");
      break;
    case "jeruk":
      items.push("Jeruk");
      break;
    default:
      console.log("Buah tidak tersedia");
  }

  ulangi = prompt("Masukan Lagi? (y/n)");
}
console.log("===================================");
console.log(`Keranjang : ${items}`);
