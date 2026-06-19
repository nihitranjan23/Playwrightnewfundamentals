const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);


// Dynamic property access
const key = "age";
console.log(user[key]);

// Adding/modifying properties
user.city = "NYC";  //adding new key
user.age = 31;     //modify age value to 31

console.log(user);


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));//not used in automation
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }