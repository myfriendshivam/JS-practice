// Immediately Invoked function Expressions(IIFE)

(function chai(){   // named IIFE
    console.log(`DB CONNECTED`);
})();
// global scope ke polution se problem hoti he kayivar to us scope ke variable ke polution ko htane keliye IIFE ka use kiya.

( (name) => {   // nan named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('prince')

// JavaScript Execution Context

/*
code file  -> Global EC -> this
 Global Execution Context
 Function Excution Context
 Eval Execution Context

 
 JS Code -> Memory Creation Phase (allocate the memory)
         -> Execution Phase

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

1) Global Execution -> allocate to this
2) Memory Phase -> 
                val1 -> undefined
                val2 -> undefined
                addNum -> defination
                result1 -> undefined
                result2 -> undefined
3) Execution Phase -> 
                val1 = 10
                val2 = 5
                addNum -> Execution Context -> (new varable environment + execution thread)
                                            Memory Phase
                                            val1 -> undefined
                                            val2 -> undefined
                                            total -> undefined
                                                                Excution Context
                                                                num1 -> 10
                                                                num2 -> 5
                                                                total -> 15 ---> return to Global Excution Context
                                                                                                delete the varable environment
                                                                                                      result1 = 15
                                                                                                              New Variable environment + thread
                                                                                                              Memory Phase
                                                                                                              val1 -> undefined
                                                                                                              val2 -> undefined
                                                                                                              total -> undefined
                                                                                                                            execution Phase
                                                                                                                            num1 -> 10
                                                                                                                            num2 -> 2
                                                                                                                            total -> 12  ---> return to Global Excution Context
                                                                                                                                    delete the varable environment
                                                                                                                                                result2 = 12
  Call Stack
  
  


  one() -> exectue then delete
  Global Exec

  running LIFO order
*/