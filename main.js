// Study Kasus
// Diberikan sebuah bilangan bulat positif, tugas kamu adalah menentukan apakah
// bilangan tersebut merupakan bilangan prima atau bukan.
// Bilangan prima adalah bilangan yang hanya dapat dibagi oleh 1 dan dirinya sendiri.

function cekBilanganPrima(n) {
  if (n < 2) {
    return `${n} bukan bilangan prima`;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} bukan bilangan prima`;
    }

    return `${n} adalah bilangan prima`;
  }
}

console.log(cekBilanganPrima(17));
