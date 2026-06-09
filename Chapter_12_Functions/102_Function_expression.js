const greet = function (name) {         // Functions as Expression

    return `Hello, ${name}`;            //const is used we think that this function should not change
}


let r = greet("Pramod");         //calling and storing the value
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}
console.log(greet1("johnson"));


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet2("Bob"));