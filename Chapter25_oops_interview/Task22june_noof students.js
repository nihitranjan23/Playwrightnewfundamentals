// Create 10 objects of students and print them.Also create a
// print method.Also sahi baasai. */

class playwright2xBatch {
    static batchName = "Playwright 2x";

    constructor(studentName, studentAge) {
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
    // Non-Static Method
    print() {
        console.log("Student Name:", this.studentName);
        console.log("Student Age:", this.studentAge);
    }

    // Static Method
    static printBatch() {
        console.log("Batch Name =", playwright2xBatch.batchName);
    }
}
const student1 = new playwright2xBatch("Satish", 25);
const student2 = new playwright2xBatch("Priya", 30);
const student3 = new playwright2xBatch("Chetan", 28);
const student4 = new playwright2xBatch("Divya", 26);
const student5 = new playwright2xBatch("Raj", 29);
const student6 = new playwright2xBatch("Neha", 27);
const student7 = new playwright2xBatch("Suresh", 31);
const student8 = new playwright2xBatch("Pooja", 24);
const student9 = new playwright2xBatch("Vikram", 32);
const student10 = new playwright2xBatch("Simran", 23);

student1.print();
student2.print();
student3.print();
student4.print();
student5.print();
student6.print();
student7.print();
student8.print();
student9.print();
student10.print();
