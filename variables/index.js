//variable = A container that stores a value.
//          Behaved as if it were the value it contains.

//1. declaration    let x;
//2. assignment     x = 100;

/*
let x;
let y = 123;

x=100;
console.log(x);
console.log(y);

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(`Your GPA is ${gpa}`);

console.log(typeof(age));
console.log(typeof(price));
console.log(typeof(gpa));
console.log(typeof("Sindhu"));

let online = true;
online = false;
console.log(typeof(online));

*/

let fullname = "Sindhu R";
let age = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").innerHTML = `You are ${age} years old`;
if(student)
{
    document.getElementById("p3").textContent = `Enrolled: ${student}`;
}
else
{
    document.getElementById("p3").textContent = `Not Enrolled: ${student}`;
}

let fruits = "apple";
console.log(typeof(fruits));

fruits = ["apple"];
console.log(typeof(fruits));

fruits = ["apple", "banana", "orange"];
console.log(typeof(fruits));
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

/*
Spread operator = ...
                    allows an iterable such as an array or string to be expanded
                    into separate elements
                    (unpacks the elements)
*/

let numbers = [1,2,3,4,5];

console.log(numbers);

let maximum = Math.max(numbers);
console.log(maximum);

maximum = Math.max(...numbers);
console.log(maximum);