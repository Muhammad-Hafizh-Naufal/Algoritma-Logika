let mahasiswa = [
  {
    id: 1,
    npm: "210001",
    name: "John Doe",
    class: "TI-1A",
  },
  {
    id: 2,
    npm: "210002",
    name: "Timmy Doe",
    class: "T3-1A",
  },
  {
    id: 3,
    npm: "123456",
    name: "Jail",
    class: "TI-1A",
  },
  {
    id: 4,
    npm: "6543321",
    name: "Tintin",
    class: "KA-1A",
  },
  {
    id: 5,
    npm: "010203",
    name: "Joseph Stalin",
    class: "BE-1A",
  },
];

// ngambil nama mahasiswa dari array

mahasiswa.map((mhs, index) => {
  console.log(
    `no : ${index + 1} \nnpm ${mhs.npm} \nnama ${mhs.name} \nkelas ${
      mhs.class
    } \n-----------------------------`
  );
});
