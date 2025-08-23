// higher order function

// ["", "", ""] -> array
// [{}, {}, {}] -> object


// For of -> array ✅
const arr =[1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


//maps -> values are unique || order mantained
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ': ', value);
}


// const myObject = {'game1': 'NFS', 'game2': 'Spiderman'}
// for (const [key, value] of myObject) { // for of loop is not iterable in object
//     console.log(key,': ', value);
//}

const myObject = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift of apple'
}

for (const key in myObject) { // for in -> object ✅
    comsole.console.log(`${key} shotcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key of programming) {   // for in -> array
    console.log(programming[key]);
}

for (const key in map) { // no output, because map is not iteratable
   console.log(key);
}