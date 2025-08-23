// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item);
} )


coding.forEach( (val) => {
    console.log(val);
} )



function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )


const myCoding =[
    {
        languageName: "JavaScript",
        languageFlieName: "js"
    },
    {
        languageName: "Java",
        languageFlieName: "java"
    },
    {
        languageName: "Python",
        languageFlieName: "py"
    }
]

myCoding.forEach( (val) => {
    console.log(item.languageName);
} )

