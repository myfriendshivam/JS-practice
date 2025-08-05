const name = "shivam"
const repoCount = 50

//console.log(name + repoCount + " Value"); // not used

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shiva-kant')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   shivam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://shivam.com/shivam%40ddndm'
console.log(url.replace('%40','-'));

console.log(url.includes('shivam'))

console.log(gameName.split('-'));
