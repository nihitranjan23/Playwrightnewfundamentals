let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

//delete config.browser;  //this will delete key
//console.log(config);


if (config.browser === "chrome") {
    console.log("I will execute my TC");
}

/*
let config2 = {
    browser = "chrome",
    timeout = 3000,
    testname = "login test"
};
*/