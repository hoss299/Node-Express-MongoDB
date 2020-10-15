var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("solution for l = " + l +"and b = " + b);

    if (l<= 0 || b<=0) {
        console.log("Dimensions should be greater than 0, l=" +l+ " b="+b);
    } else {
        console.log("Area is " + rect.area(l,b));
        console.log("Perimeter is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);