//Q1
for (let i = 2; i < 11; i++) {
    console.log(i);
    i += 1;
}

//Q2
for (let i = 5; i > 0; i--) {
    console.log(i);
}

//Q3
const myNums = [1, 2, 3, 4, 5];
let sum = 0;

for (const myNum of myNums) {
    sum += myNum;
}

console.log("sum: " + sum);

//Q4
const student = {name: 'John', age: 20, grade: 'A'};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

//Q5
const book = {title: 'Harry Potter', author: 'JK Rowling', year: '1997'};

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

//Q6
const colors = ['red', 'green', 'blue', 'yellow']; 

for (const color of colors) {
    console.log(color);
}

//Q7
const myNums2 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (const myNum of myNums) {
    sum += myNum;
}

console.log("sum: " + sum);

//Q8
const temperatures = [32, 68, 75, 82, 56];

temperatures.forEach(function(temperature) {
    temperature = (temperature - 32) * 5/9;
    console.log(temperature);
});

//Q9
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago' : 2705994, 'Houston' : 2320268};

cities.forEach(function(city) {
    console.log(city + ": " + populations[city])
});

//Q10
//for (let i = 0; i < 5; i++) {
//    for (let j = 0; j < 5; j++) {
//        console.log('*')
//    }

//}