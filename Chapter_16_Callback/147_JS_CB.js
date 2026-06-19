console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2: API response received");
}, 4000);

console.log("Test 3: moving to next test");

// **Why does Test 3 print before Test 2?**
//beacause it is asynacounous in nature