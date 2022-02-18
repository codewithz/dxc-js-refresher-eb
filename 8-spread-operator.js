const first = [1, 2, 3];
const second = [4, 5, 6];

//1,2,3,4,5,6

const combinedOld = first.concat(second);

console.log(combinedOld);

//1,2,3,a,b,4,5
const letters = ['a', 'b'];

// const combinedThree = first.concat(letters).concat(second);
const combinedThree = [...first, ...letters, ...second];
console.log(combinedThree);

//1,2,3,a,4,5,6,b

const combinedNew = [...first, 'a', ...second, 'b'];
console.log(combinedNew);

//-------- Benefits of [...]-------------
console.log("-----------------------------use of [...]-------------")
const grades = ["C", "A", "B", "D"];
console.log("Before Sort : ", grades);
const sortedGrades = [...grades].sort();
console.log("After Sort : ", sortedGrades);
console.log("Source : ", grades);

console.log("---------------- Spread operator for Objects--------------")

const obj1 = { name: 'Zartab', age: 31 }
const obj2 = { location: 'Mumbai' }

const combinedObject = { ...obj1, ...obj2, profile: 'Corporate Trainer' };

console.log(combinedObject);