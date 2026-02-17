console.log("Belajar JavaScript Dasar");
console.log("========================");

// start

var countSheep = function (num) {
  let gabungkan = "";
  if (num === 0) return "";

  for (let i = 1; i <= num; i++) {
    gabungkan += `${i} sheep...`;
  }

  return gabungkan;
};

console.log(countSheep(3));
