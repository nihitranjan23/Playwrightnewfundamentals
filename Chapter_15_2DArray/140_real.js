let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? -3
// How many test cases are passed? - 2
// What is the status code that you have got for the fail? 

//using loop
for (let i = 0; i < testMatrix.length; i++) {  //rows
    for (let j = 0; j < testMatrix[i].length; j++) {    //columns
        console.log(testMatrix[i][j]);
    }
    console.log();
}

//using row and cell of
for (let row of testMatrix) {   //rows
    for (let cell of row) {              //columns
        process.stdout.write(cell + " ")
    }
    console.log();
}

// forEach   we are not using this one
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});