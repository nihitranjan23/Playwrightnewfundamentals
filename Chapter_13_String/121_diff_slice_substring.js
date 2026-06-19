// =============================================================================
// Difference between slice() and substring() in JavaScript
// =============================================================================

const str = "JavaScript";

// Index mapping for "JavaScript"
//  J   a   v   a   S   c   r   i   p   t
//  0   1   2   3   4   5   6   7   8   9
// -10  -9  -8  -7  -6  -5  -4  -3  -2  -1

// -----------------------------------------------------------------------------
// 1. Basic Usage (Same Result)
// -----------------------------------------------------------------------------

console.log("=== 1. Basic Usage ===");
console.log("slice(0, 4):       ", str.slice(0, 4));        // "Java"
console.log("substring(0, 4):   ", str.substring(0, 4));    // "Java"


// -----------------------------------------------------------------------------
// 2. Negative Indexes (Key Difference!)
// -----------------------------------------------------------------------------

console.log("\n=== 2. Negative Indexes ===");

// slice() supports negative indexes (counts from the end)
console.log("slice(-6):         ", str.slice(-6));          // "Script"
console.log("slice(0, -6):      ", str.slice(0, -6));       // "Java"

// substring() treats negative indexes as 0
console.log("substring(-6):     ", str.substring(-6));      // "JavaScript"
console.log("substring(0, -6):  ", str.substring(0, -6));   // ""


// -----------------------------------------------------------------------------
// 3. Start > End (Key Difference!)
// -----------------------------------------------------------------------------

console.log("\n=== 3. Start Index > End Index ===");

// slice() returns empty string if start > end
console.log("slice(6, 4):       ", str.slice(6, 4));        // ""

// substring() automatically swaps the arguments
console.log("substring(6, 4):   ", str.substring(6, 4));    // "Sc"


// -----------------------------------------------------------------------------
// 4. Omitted Second Argument
// -----------------------------------------------------------------------------

console.log("\n=== 4. Omitted Second Argument ===");

// Both methods extract to the end of the string
console.log("slice(4):          ", str.slice(4));           // "Script"
console.log("substring(4):      ", str.substring(4));       // "Script"


// -----------------------------------------------------------------------------
// Summary Table (as comments)
// -----------------------------------------------------------------------------

/*
| Feature               | slice()               | substring()           |
|-----------------------|-----------------------|-----------------------|
| Syntax                | str.slice(start, end) | str.substring(start, end) |
| Negative indexes      | Allowed (from end)    | Treated as 0          |
| Swapping arguments    | Returns empty string  | Swaps automatically   |
| Mutates original?     | No                    | No                    |
| End index             | Exclusive             | Exclusive             |
*/


// -----------------------------------------------------------------------------
// Quick Reference Examples with "Hello World"
// -----------------------------------------------------------------------------

console.log("\n=== Quick Reference with 'Hello World' ===");

const text = "Hello World";

// Extract "World"
console.log('text.slice(6):          ', text.slice(6));              // "World"
console.log('text.substring(6):      ', text.substring(6));          // "World"

// Extract "Hello"
console.log('text.slice(0, 5):       ', text.slice(0, 5));           // "Hello"
console.log('text.substring(0, 5):   ', text.substring(0, 5));       // "Hello"

// Last 5 characters
console.log('text.slice(-5):         ', text.slice(-5));             // "World"
console.log('text.substring(-5):     ', text.substring(-5));         // "Hello World"

// Reversed indexes
console.log('text.slice(5, 0):       ', text.slice(5, 0));           // ""
console.log('text.substring(5, 0):   ', text.substring(5, 0));       // "Hello"


// -----------------------------------------------------------------------------
// Recommendation: Use slice() for modern, predictable behavior
// -----------------------------------------------------------------------------
