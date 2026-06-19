// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));  //true
console.log(url.includes("production"));   //false

// startsWith / endsWith
console.log(url.startsWith("https")); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));  //find index from left to right
console.log(url.lastIndexOf("a"));  //find index from right to left

console.log(url.indexOf("nothere"));  //if number is not find then that index is -1
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));  //here login is start with 28
console.log(url.search(/vwo/));  //here vwo start with 16

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 