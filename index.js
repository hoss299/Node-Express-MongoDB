var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("solution for l = " + l +"and b = " + b);

    rect(l,b, (err, rectangle) => {
        if  (err) {
            console.log("ERROR:", err.message);
        } else {
            console.log(`l = ${l} , b = ${b} , area = ${rectangle.area()}`);
            console.log(`l = ${l} , b = ${b} , perimeter = ${rectangle.perimeter()}`);
        }
    });
    console.log("This statement is after the call to rect() \n");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);