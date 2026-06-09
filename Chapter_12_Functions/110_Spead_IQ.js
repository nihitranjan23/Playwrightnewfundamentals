/*

function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
add(...num);

*/



let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let value = hasError(...responseCodes);
console.log(value);// true

//here some is to used any value greater than 400
//some return value in true or false