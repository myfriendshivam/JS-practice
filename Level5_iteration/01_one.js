// for


for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let D = 0; D <= 5; D++) {
    console.log(`Outer loop value: ${D}`);
    for (let j = 0; j <= 5 ; j++) {
        console.log(`Inner loop value ${j} and inner loop ${D}`);
        console.log(D + '*' + j + '=' + D*j);
        
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);   
}

// break and Continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}


// while & do-while

let index = 0
while(index <= 10){
    console.log(`Value od index is ${index}`);
    index = index + 2

}

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

// let score = 1
let score = 11
do{
    console.log(`Score is ${score}`);
    score++
} while(score <= 10)


