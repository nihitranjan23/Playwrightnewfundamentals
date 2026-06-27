// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
//h(0) t(1) t(2) p(3) s(4) :(5) /(6) /(7) s(8) t(9) a(10) g(11) i(12) n(13) g(14) .(15) v(16) w(17) o(18) .(19) c(20) o(21) m(22) /(23) a(24) p(25) i(26) /(27) l(28) o(29) g(30) i(31) n(32) ?(33) r(34) e(35) t(36) r(37) y(38) =(39) t(40) r(41) u(42) e(43)

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