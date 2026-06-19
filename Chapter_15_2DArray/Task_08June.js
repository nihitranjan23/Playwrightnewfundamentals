//Print Reverse

/*
let n = 5;
for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}

*/

//Print Pyramid
let x = 5;
for (let i = 1; i <= x; i++) {
    let row = " ";
    for (let j = 0; j <= x - 1 - i; j++) {
        row += " ";
    }
    for (let k = 0; k < i; k++) {
        row += "* ";
    }
    console.log(row);
}