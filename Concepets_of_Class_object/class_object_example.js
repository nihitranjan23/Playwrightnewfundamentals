// CLASS: Blueprint for creating objects
class Student {
    // Constructor to initialize object properties
    constructor(name, rollNo, grade) {
        this.name = name;
        this.rollNo = rollNo;
        this.grade = grade;
    }

    // Method (behavior)
    study() {
        console.log(`${this.name} is studying.`);
    }

    getDetails() {
        return `Name: ${this.name}, Roll No: ${this.rollNo}, Grade: ${this.grade}`;
    }
}

// OBJECTS: Instances created from the Student class
const student1 = new Student("Rahul", 101, "A");
const student2 = new Student("Priya", 102, "B");

// Using objects
console.log("--- Student 1 ---");
console.log(student1.getDetails());
student1.study();

console.log("\n--- Student 2 ---");
console.log(student2.getDetails());
student2.study();
