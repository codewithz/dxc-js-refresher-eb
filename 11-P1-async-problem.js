console.log("Before")

const user = getUser(1);
console.log(user)

console.log("After")

//-------------Three ways to resolve this issue--------------------------------

//1. Callbacks
//2. Promises
//3. Async Await

function getUser(id) {

    setTimeout(() => {
        console.log('Reading user from db...')
        return ({ id: 1, gitUser: 'codewithz' });
    }, 2000);
}