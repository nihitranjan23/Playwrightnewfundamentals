// ===========================================
// WITHOUT 'this' KEYWORD - PROBLEM
// ===========================================

class CarWithoutThis {
    constructor(name_given) {
        // NOT using this - just creating a local variable
        name = name_given;  // This is a LOCAL variable, not object property
    }

    drive() {
        console.log("Without this - name:", name);  // ERROR! name is not defined here
    }
}

// ===========================================
// WITH 'this' KEYWORD - CORRECT WAY
// ===========================================

class CarWithThis {
    constructor(name_given) {
        // Using this - creates OBJECT PROPERTY
        this.name = name_given;
    }

    drive() {
        console.log("With this - I am driving", this.name);
    }
}

// ===========================================
// TESTING BOTH
// ===========================================

console.log("=== WITH 'this' KEYWORD ===");
const tesla = new CarWithThis("Model S");
tesla.drive();  // Works! Prints: I am driving Model S

const bmw = new CarWithThis("X5");
bmw.drive();    // Works! Prints: I am driving X5

console.log("\n=== WITHOUT 'this' KEYWORD ===");
// This will throw an error because 'name' is not accessible in drive() method
// Uncomment the lines below to see the error:
// const honda = new CarWithoutThis("Civic");
// honda.drive();  // ERROR: name is not defined

// ===========================================
// WHAT HAPPENS IF YOU FORGET 'this'?
// ===========================================

/*
PROBLEM WITHOUT 'this':
┌─────────────────────────────────────┐
│ constructor(name_given) {           │
│     name = name_given;   ← LOCAL    │
│ }                                    │
│                                      │
│ drive() {                            │
│     console.log(name);   ← ERROR!    │
│ }                                    │
│                                      │
│ Local variables DIE after constructor│
│ Method can't access them!            │
└─────────────────────────────────────┘

SOLUTION WITH 'this':
┌─────────────────────────────────────┐
│ constructor(name_given) {           │
│     this.name = name_given; ← OBJECT│
│ }                                    │
│                                      │
│ drive() {                            │
│     console.log(this.name); ← OK!   │
│ }                                    │
│                                      │
│ Object properties STAY with object   │
│ Method CAN access them!              │
└─────────────────────────────────────┘
*/

// ===========================================
// VISUAL COMPARISON OF MEMORY
// ===========================================

// WITH this:
// tesla = {
//     name: "Model S"     ← PROPERTY (stored in object, accessible everywhere)
// }

// WITHOUT this:
// constructor creates: name = "Model S"  ← LOCAL (dies after constructor ends)
// tesla = {}  ← EMPTY! No properties

console.log("\n=== CHECKING OBJECT PROPERTIES ===");
console.log("tesla object:", tesla);
console.log("tesla.name:", tesla.name);  // Accessible!
