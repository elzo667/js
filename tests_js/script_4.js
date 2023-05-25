// Exercice 2.3.1. Startup Nation
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  console.log(`Liste les entrepreneurs qui sont nés dans les années 70 :`);
  entrepreneurs.forEach(entrepreneur => {
    if (String(entrepreneur.year)[2] == 7) {
      console.log(entrepreneur.first + ` ` + entrepreneur.last)
    }
  });
  
  let array_entrepreneurs = [];
  console.log(`Array qui contient le prénom et le nom des entrepreneurs :`);
  entrepreneurs.forEach(entrepreneur => {
    array_entrepreneurs.push(entrepreneur.first + ` ` + entrepreneur.last);
  });
  console.log(array_entrepreneurs);
  
  let array_age = [];
  console.log(`Liste des âges qu'aurait eu chaque inventeur aujourd'hui :`);
  entrepreneurs.forEach(entrepreneur => {
    array_age.push(2023 - Number(entrepreneur.year));
  });
  console.log(array_age);
  
  
  console.log(`Liste des entrepreneurs par ordre alphabétique du nom de famille :`);
  // sort by name
  entrepreneurs.sort((a, b) => {
    const nameA = a.last.toUpperCase(); // ignore upper and lowercase
    const nameB = b.last.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  console.log(entrepreneurs)