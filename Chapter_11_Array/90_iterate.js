// Iterate - Go from one to another. // 

let testy = ["login", "checkout", "search"];

for (let i = 0; i < testy.length; i++) {
    console.log(testy[i]);
}

console.log("----");

// for...of (cleanest for values)
for (test of testy) {
    console.log(test);
}

console.log("----");

testy.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}

console.log("----");

for (let [i, test] of testy.entries()) {
    console.log(i, test);
}