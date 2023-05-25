const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(`Est-ce que tous les livres ont été au moins empruntés une fois ?`);
array_books = [];
books.forEach(book => {
  if (String(book.rented) == 0) {
    array_books.push(book.title);
  }
});
if (array_books.length === 0) {
  console.log (`Oui, tous les livres ont été au moins empruntés une fois`);
} else {
  console.log(`Non, tous les livres n'ont pas été au moins empruntés une fois - ce n'est pas le cas du.es livre.s suivant.s : ${array_books}`);
}

console.log(`Quel est livre le plus emprunté ?`);
const max = books.reduce((prev, current) => (prev.rented > current.rented) ? prev : current);
console.log(`Il s'agit du livre suivant : ${max.title}`);

console.log(`Quel est le livre le moins emprunté ?`);
const min = books.reduce((prev, current) => (prev.rented < current.rented) ? prev : current);
console.log(`Il s'agit du livre suivant : ${min.title}`);


console.log(`Trouve le livre avec l'ID: 873495`);
let book_873495 = books.find(book => book.id === 873495);
console.log(book_873495);

console.log(`Supprime le livre avec l'ID: 133712`);
let book_to_delete = (book) => book === books.find(book => book.id === 133712);
let book_to_delete_id = books.findIndex(book_to_delete);

books.splice(book_to_delete_id,1);

console.log(`Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)`);
books.sort((a, b) => {
  const titleA = a.title.toUpperCase(); // ignore upper and lowercase
  const titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
});
console.log(books)