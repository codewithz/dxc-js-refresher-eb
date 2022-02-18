//objects,functions --. camelCasing
//class --> Pascal Casing

//camelCasing --> oneTwoThreeFour
//PascalCasing --> OneTwoThreeFour

class Person {

    constructor(firstName, lastName) {
        this.name = `${firstName} ${lastName}`
    }
    walk() {
        console.log(this.name, "is Walking")
    }
}


const person1 = new Person('Zartab', 'Nakhwa');
console.log(person1.name);
person1.walk();

const person2 = new Person('Arun', 'Maurya');
console.log(person2.name)
person2.walk()







// const person1 = {
//     name: 'Zartab',
//     walk() {
//         console.log("Walking")
//     }
// }
// const person2 = {
//     name: 'Tom',
//     walk() {
//         console.log("Walking")
//     }
// }
// const person3 = {
//     name: 'Alex',
//     walk() {
//         console.log("Walking")
//     }
// }
// const person4 = {
//     name: 'Mike',
//     walk() {
//         console.log("Walking")
//     }
// }

// console.log(person1.name);
// person1.walk();
// console.log("---------------------")
// console.log(person2.name);
// person2.walk();
// console.log("---------------------")
// console.log(person3.name);
// person3.walk();
// console.log("---------------------")
// console.log(person4.name);
// person4.walk();
// console.log("---------------------")