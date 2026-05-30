// Triangle Classifier:
// Write a program that classifies a triangle based on
//  its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal).
//   Use an if-else statement to classify the triangle.


let a = 25, b = 23, c = 23;

if (a === b && b == c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || c === a) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}

//Write a program that prints numbers from 1 to 100. However, for multiples of 3,
// print "Fizz" instead of the number,
//  and for multiples of 5, print "Buzz." For numbers
//  that are multiples
//  of both 3 and 5, print "FizzBuzz.


for (i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } //else {
    //console.log(i);
    // }


}