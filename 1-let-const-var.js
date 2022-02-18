console.log('-----------------var--------------------')

function sayHello() {

    for (var i = 1; i <= 5; i++) {
        console.log("Value of [i] in for loop : ", i);
    }

    console.log('Value of [i] after for loop ', i);
}

sayHello();

//------------------let --------------------------
console.log('-----------------let--------------------')
function sayHi() {

    for (let i = 1; i <= 5; i++) {
        console.log("Value of [i] in for loop : ", i);
    }

    // console.log('Value of [i] after for loop ', i);
    // Cannot access i because it is out of scope.
}

sayHi();

console.log("----------------------const---------------------")

const company = "DXC";
// company = "DXC Inc";
// const cannot be reassigned