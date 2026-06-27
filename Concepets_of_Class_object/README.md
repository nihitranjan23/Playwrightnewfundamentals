# Concepts of Class and Object in OOP

This folder contains a simple JavaScript example demonstrating **Classes** and **Objects** in Object-Oriented Programming (OOP).

## What is a Class?

A **Class** is a blueprint or template for creating objects. It defines the properties (attributes) and methods (behaviors) that the objects created from it will have.

## What is an Object?

An **Object** is an instance of a class. It is a real entity created from the class blueprint, with actual values and memory allocation.

## File Structure

```
Concepets_of_Class_object/
└── class_object_example.js   # JavaScript example demonstrating Class & Object
```

## Example Overview

The example uses a `Student` class with:
- **Properties**: `name`, `rollNo`, `grade`
- **Methods**: `study()`, `getDetails()`

Two objects (`student1` and `student2`) are created from this class to show how one class can produce multiple instances.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal/command prompt.
3. Navigate to this folder:
   ```bash
   cd "Concepets_of_Class_object"
   ```
4. Run the JavaScript file:
   ```bash
   node class_object_example.js
   ```

## Expected Output

```text
--- Student 1 ---
Name: Rahul, Roll No: 101, Grade: A
Rahul is studying.

--- Student 2 ---
Name: Priya, Roll No: 102, Grade: B
Priya is studying.
```

## Key Takeaway

| Concept | Description |
|---------|-------------|
| **Class** | Blueprint / Template (e.g., `class Student`) |
| **Object** | Real instance created from class (e.g., `new Student(...)`) |

> **One Class → Many Objects.** That is the power of Object-Oriented Programming!
