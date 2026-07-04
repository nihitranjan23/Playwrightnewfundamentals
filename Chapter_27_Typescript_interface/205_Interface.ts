interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // Alternative syntax

}

// const noObject = {
//     id: 1
// }
//interface allow you to the complete the incomplete function after words that why interface is used in abstraction


const calc: Calculator = {  //calc is the object reference   
    add: (a, b) => a + b,   //object is the type of calculator
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc);