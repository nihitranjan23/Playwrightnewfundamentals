// Example 1: Greeting with a default name
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();          // Output: Hello, Guest!
//greet("Alice");   // Output: Hello, Alice!


// Example 2: Calculating total price with default tax
function calculateTotal(price, tax = 0.05) {
    return price + (price * tax);
}

console.log(calculateTotal(100));       // Output: 105 (5% default tax)
console.log(calculateTotal(100, 0.1)); // Output: 110 (10% custom tax)


// Key point: If you don't pass an argument for a parameter, 
// JavaScript uses the default value specified with '=' in the function definition.
