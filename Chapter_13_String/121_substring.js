let str = "Login_Test_Pass_001";
//L  o  g  i  n  _  T  e  s  t  _  P  a  s  s  _  0  0  1
//0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // 0,4 ->
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));


// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));  //(6,9)
console.log(str.substring(5, 14));   //(5,13)

