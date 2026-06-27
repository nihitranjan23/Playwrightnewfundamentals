// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global //give staging
    console.log(timeout); // ✅ can access local //3000
}


setupConfig();
console.log(env);// staging
console.log(timeout);// reference error because this timeout is let variable is local scope