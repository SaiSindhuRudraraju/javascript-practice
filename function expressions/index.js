// function declaration =  define a reusable block of code that performs a specific task
function exampleFunctiondefinition()
{
    console.log("Hello");
}

// function expression = a way to define function as values or variables

const hello = function(){
                        console.log("Hello");
                    }

hello();

setTimeout(function(){ console.log("Waited!!")}, 3000);


//simplifying map with function expressions:
const numbers = [1,2,3,4,5,6];
/*
const squares = numbers.map(square);

console.log(squares);

function square(element)
{
    return Math.pow(element, 2);
}
*/
const squares = numbers.map(function(element){return Math.pow(element, 2);});
console.log(squares);

//simplifying filter with function expressions:

let number = [1,2,3,4,5,6,7];
/*
let evenNums = number.filter(isEven);
console.log(evenNums);

function isEven(element)
{
    return element % 2 === 0;
}
*/
const evenNums = number.filter(function(element){return element % 2 === 0;});
console.log(evenNums);

//simplifying reduce with function expressions:
const prices = [5, 30, 10, 25, 15, 20]
/*
const total = prices.reduce(sum);
console.log(`Total price : ${total}`);
function sum(previousElement, nextElement){
    return previousElement + nextElement;
}*/
const total = prices.reduce(function(previousElement, nextElement){
    return previousElement + nextElement;
});
console.log(`Total price : ${total}`);