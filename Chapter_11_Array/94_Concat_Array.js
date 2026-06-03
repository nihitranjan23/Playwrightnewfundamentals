let a = [11, 42];
let b = [32, 54];
// let c = a + b;
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);
let s1 = ["pass", "fail", "skip"].join("  ");
console.log(s1);