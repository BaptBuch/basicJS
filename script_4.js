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

// Question 1
/*
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
let birthdate = entrepreneurs.filter(function(birth) {
  return birth.year > 1969 && birth.year < 1980;
});

console.log(birthdate)
*/

// Question 2
/*
i=0
array =[]
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
while (i <= entrepreneurs.length-1){
  i+=1;
  array.push(entrepreneurs[i].first+" "+entrepreneurs[i].last);
  if (i === entrepreneurs.length-1) break;
}
console.log(array)
*/

// Question 3
/*
i=0
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
while (i < entrepreneurs.length-1){
  i+=1;
  a = 2021 - entrepreneurs[i].year;
  console.log(entrepreneurs[i].first+" "+entrepreneurs[i].last+" a/aurait "+a+" ans cette année");
  if (i === entrepreneurs.length-1) break;
}
*/

// Question 4
/*
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")

function compare( a, b ) {
  if ( a.last < b.last ){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
}

entrepreneurs.sort(compare);
console.log(entrepreneurs)
*/