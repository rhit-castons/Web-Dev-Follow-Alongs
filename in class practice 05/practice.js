/* function myFunction() {
    document.getElementById("demo").innerHTML = "testing";
} 
can use this as external script
*/

console.log("more testing ! " + (100 + 27));

let x, y, z; // declare variables
x = 100;
y = 27;
z = x + y;
console.log(z);

let person = "George";

const m = 28; // immutable
const n = 2;
var j;
j = m + n;
console.log(j);

j = 999; // j immutable
console.log(j);

let person2 = "Rae", carName = "VW Golf", price = 450;
// can declare multiple variables in one line

let drinkName; // primitive type -> undefined

let myString = person + " and " + person2 + " own a " + carName;
console.log(myString);

let $ = "hey hey", _secretVar = 5; // can use '$' and '_' as var names

/* you cannot do the following:

let x = "John Doe";

let x = 0;

*/

var name = "my name"; // however you can...
var name = 9;

{
    let p = 1;
}

/* z = p + n; >>> cannot use locally defined p outside scope */

{
    var p = 23;
}

console.log("but ! you can use " + p + " here as it was defined with 'var' ");

var q = 10;
// Here q is 10

{
var q = 2;
// Here q is 2
}

console.log("here, q is..." + q + "!")// Here q is 2, overwritten by scope

let b = 10;
// Here b is 10

{
let b = 2;
// Here b is 2
}

console.log("here, b is..." + b + "!")// Here b is 10, with let, globally declared var can remained unchanged
