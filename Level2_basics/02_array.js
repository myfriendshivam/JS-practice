const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // take any data
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros) // this return new array
// console.log(all_heros);

// spread operator
const allnewHeros = [...marvel_heros, ...dc_heros]
console.log(allnewHeros);

const anotherArr = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr);

// data scraping - select data from web page
console.log(Array.isArray("Shivam"));
console.log(Array.from("Shivam")); // converted in array
console.log(Array.from({name: "Shivam"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

