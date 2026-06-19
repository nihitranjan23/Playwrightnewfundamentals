
const user = { name1: "John", age: 30, city: "NYC" };

// Basic destructuring
//const { name1, age } = user;
//console.log(name1);
//console.log(age);
//console.log(user);


// Rename variables
//const { name1: userName, age: userAge } = user;
//console.log(userName);
//console.log(userAge);



// destructuring
//const { age } = user;

// Default values
//const { country = "USA" } = user;  //here new key country is used but not added on user
//console.log(country);
//console.log(user);



const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
};

const { user: { address: { city } } } = data;
console.log(data.user.address.city);
console.log(data.user.address);
console.log(data.user);
console.log(data);

