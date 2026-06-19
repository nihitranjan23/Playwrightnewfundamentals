// Single quotes
let a = 'hello';
console.log(a);

// Double quotes
let b = "world";
console.log(b);



let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
console.log(report);

let longstory = `
I want to tell you a very long story 
where we had a lot of students, w
hich we basically have a lot of tests and blah
 blah blah blah blah blah. 
`;

console.log(String(200)); // "200"
// String(true); -> // "true"
console.log(String(null)); // "null"
String([1, 2]); // "[1,2]"

// string - data type
// String -> interface( which will help you to create a new strings)