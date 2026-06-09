// REST PARAMETER in JavaScript
// The rest parameter (...args) collects all remaining arguments into a real array.


// Example 1: Basic rest parameter
function sum(first, second, ...others) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Others:", others);
}

console.log("=== Example 1: Basic Rest Parameter ===");
sum(10, 20, 30, 40, 50);


// Example 2: Loop through all numbers
function totalSum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("\n=== Example 2: Total Sum ===");
console.log(totalSum(1, 2, 3));       // 6
console.log(totalSum(5, 10));          // 15
console.log(totalSum());               // 0


// Example 3: Real-world example - Logging errors
function logErrors(apiName, ...errors) {
    console.log(`\nAPI: ${apiName}`);
    errors.forEach(err => console.log("  - " + err));
}

console.log("=== Example 3: Log Errors ===");
logErrors("Login API", "Timeout", "Invalid token", "Server down");


// Example 4: Combining regular parameters with rest
function showTeam(captain, viceCaptain, ...players) {
    console.log("\n=== Example 4: Show Team ===");
    console.log("Captain:", captain);
    console.log("Vice Captain:", viceCaptain);
    console.log("Players:", players);
}

showTeam("Virat", "Rohit", "Dhoni", "Jadeja", "Bumrah", "Shami");


// Key Rules:
// 1. The rest parameter must be the LAST parameter in the function.
// 2. You can only have ONE rest parameter per function.
// 3. It is a REAL array, unlike the old 'arguments' object.
//    So you can use .map(), .filter(), .forEach(), .reduce(), etc.

