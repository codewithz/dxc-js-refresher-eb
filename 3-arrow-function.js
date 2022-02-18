function sayHello() {
    console.log("Hello World");
}

sayHello();

let sayHelloAr = () => {
    console.log("Hello World from arrow functions");
}

sayHelloAr();

//---------------Single parameter function----------------


function square(number) {
    return number * number;
}

//---------------------------------------

let squareAr1 = (number) => {
    return number * number;
}

// When a function have only a single parameter -- you can skip the (), else it is mandatory

let squareAr2 = number => {
    return number * number;
}

//If number of statement in the function body is one, we can skip the {}  and return statement
// If the statement used is a executable statement [console.log()], it will execute
// If the statement is a value, it will be returned

let squareAr3 = number => number * number;

console.log(square(3));
console.log(squareAr1(4));
console.log(squareAr2(5));
console.log(squareAr3(6));

//---------- Multiple Parameters-----------

function add(a, b, c) {
    return a + b + c;
}

let addAr = (a, b, c) => a + b + c;

function someCalculation(a, b, c) {
    let d = a + b;
    d = d - 3;
    let e = a + c;
    e = e + 3;
    return d - e;
}

const someCalc = (a, b, c) => {
    let d = a + b;
    d = d - 3;
    let e = a + c;
    e = e + 3;
    return d - e;
}
