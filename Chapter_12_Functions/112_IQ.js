let g_x = 10;


// Nested scope | blocked scope //will not be used in automation
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
} 