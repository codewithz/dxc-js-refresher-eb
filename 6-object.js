const person = {
    name: 'Zartab Nakhwa',
    age: 31,
    blog: 'www.codewithz.com',
    walk() {
        console.log("Walking")
    },
    talk() {
        console.log("Talking");
    }
}

person.walk();

//Dot Operator 
//person.------
person.education = 'Masters in IT';

//Treating object as an array -- dynamic 

person['city'] = 'Mumbai';

let memberKey = 'car';
let memberValue = 'Honda City';

person[memberKey] = memberValue;

function test() {

}

person['test'] = test;


console.log(person);