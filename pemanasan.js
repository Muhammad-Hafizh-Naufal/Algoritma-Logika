function hitunghuruf(kalimat) {
  let hasil = {};
  for (let huruf of kalimat) {
    if (hasil[huruf]) {
      hasil[huruf] += 1;
    } else {
      hasil[huruf] = 1;
    }
  }

  return hasil;
}

console.log(hitunghuruf("jawa"));
