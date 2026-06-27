# Chapter 21: Class and Object in JavaScript

This folder contains examples demonstrating **Classes** and **Objects** in JavaScript Object-Oriented Programming (OOP).

## File Structure

```
Chapter21_Class_object/
├── 171_Class_object.js        # Basic class and object example (Student)
├── 172_Object_Class2.js       # Another object/class example
├── 173_Car.js                 # Car class with constructor and methods
└── 174_This_vs_NoThis.js      # Comparison: with vs without 'this' keyword
```

## Files Explained

### 1. `171_Class_object.js` - Basic Class & Object
- Introduces the concept of a `class` as a blueprint
- Creates objects using `new` keyword
- Demonstrates properties and methods

### 2. `172_Object_Class2.js` - Another Example
- Additional class/object patterns
- Reinforces constructor usage

### 3. `173_Car.js` - Car Class with Constructor
- **`this` keyword explained**: Used to create object properties
- Constructor accepts parameters during object creation
- Methods can access object properties via `this`

**Key Example:**
```javascript
class Car {
    constructor(name) {
        this.name = name;  // 'this' stores data IN the object
    }
    drive() {
        console.log("I am driving", this.name);
    }
}

const tesla = new Car("Model S");
tesla.drive();  // Output: I am driving Model S
```

### 4. `174_This_vs_NoThis.js` - Why `this` is Important
- Shows what happens **with** `this` (works correctly)
- Shows what happens **without** `this` (ERROR!)
- Demonstrates memory visualization

**Without `this`: ❌**
```javascript
constructor(name) {
    name = name;  // Local variable - DIES after constructor
}
drive() {
    console.log(name);  // ERROR! name is not defined
}
```

**With `this`: ✅**
```javascript
constructor(name) {
    this.name = name;  // Object property - STAYS forever
}
drive() {
    console.log(this.name);  // Works! Reads from object
}
```

## Key Concepts

| Concept | Description |
|---------|-------------|
| **Class** | Blueprint/template for creating objects |
| **Object** | Instance created from a class |
| **Constructor** | Special method that runs when object is created |
| **`this`** | Refers to the **current object** - stores data permanently |
| **Method** | Function inside a class that objects can call |

## Why Use `this`?

- **Without `this`**: Variables are local (temporary) and die after constructor
- **With `this`**: Properties are attached to the object and accessible everywhere

## How to Run

```bash
cd Chapter21_Class_object
node 171_Class_object.js
node 172_Object_Class2.js
node 173_Car.js
node 174_This_vs_NoThis.js
```

> **Remember**: One Class → Many Objects. That's the power of OOP! 🚗
