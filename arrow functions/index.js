// arrow functions = a consise way to write function expressions good for 
//                   simple functions that you use only once 
//      (parameters) => some code


//function definition
function hello(){
    console.log("Hello");
}
hello();

//function expression
const hello1 = function(){ console.log("Hello");}
hello1();

//arrow function
const hello2 = () => console.log("HEllo");
hello2();

const sum = (x,y) => { return x+y};
console.log(sum(3,4));

const greet = (name, age) => {console.log(`Hi ${name}`);
                                console.log(`You are ${age} years old`);};
greet("sindhu", "24");

setTimeout(()=> console.log("Hello"), 3000);


//map function

let numbers = [1,2,3,4,5,6,7];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

//filter function

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

//reduce function

const prices = [5, 30, 10, 25, 15, 20]
const total = prices.reduce((previousElement, nextElement) => previousElement + nextElement);
console.log(`Total price : ${total}`);
