const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Source : ", numbers)

//Approach 1

const filteredArray1 = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        filteredArray1.push(number);
    }
}

console.log("Approach 1 :", filteredArray1);

// Approach 2 

function evenFilter(number) {
    return number % 2 === 0;
}

const filteredArray2 = numbers.filter(evenFilter);

console.log("Approach 2 :", filteredArray2);

// Approach 3


const filteredArray3 = numbers.filter(number => number % 2 === 0);
console.log("Approach 3 :", filteredArray3);

//---------------array of objects-------------------

const jobs = [
    { id: 1, position: 'Developer', isActive: true },
    { id: 2, position: 'Tester', isActive: true },
    { id: 3, position: 'Devops', isActive: false },
    { id: 4, position: 'Manager', isActive: true }
];
console.log("------------------------------------------------------")
console.log("Source: ", jobs);
console.log("------------------------------------------------------")

function activeJobs(job) {
    return job.isActive;
}

const filteredJobs = jobs.filter(activeJobs);
console.log("Filtered: ", filteredJobs)