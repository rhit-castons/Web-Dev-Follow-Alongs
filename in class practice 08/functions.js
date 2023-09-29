//Q1
console.log(multiply(12, 7));

function multiply(x, y) {
    return x * y;
}

//Q2
console.log(isEven(12));

function isEven(num) {
    return num % 2 == 0;
}

//Q3
const subtract = function(a, b) {
    return a - b;
}

console.log(subtract(147,20));

//Q4
const greeting = function(name) {
    return `hello ${name}!`;
}

console.log(greeting('sofa soap'));

//Q5
console.log(calculate(2, 3));

function calculate(x, y) {
    return square(x + y);
}

function square(x) {
    return x * x;
}

//Q6
console.log(average(1, 2, 7));

function average(num1, num2, num3) {
    return ((num1 + num2 + num3)/3);

}

//Q11
console.log(findMax(127, 20, 7, 0, 2));

function findMax(numbers) {
    return Math.max(numbers);
}







