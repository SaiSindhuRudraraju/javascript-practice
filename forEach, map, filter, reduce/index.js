//forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

//Ex: array.forEach(callback)
//element, index and array are provided automatically

//Example1 :

let numbers = [1,2,3,4,5];

numbers.forEach(number => 
    console.log(number)
)

function double(element, index, array)
{
    array[index] = element * 2;
}
numbers.forEach(double);

numbers.forEach(display);
function display(element)
{
    console.log(element);
}

//Example 2:

let fruits = ["apple", "orange", "banana", "coconut"];

function upperCase(element, index, array)
{
    array[index] = element.toUpperCase()
}
//fruits.forEach(upperCase);
//fruits.forEach(fruitdisplay);

function capitalize(element, index, array)
{
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(fruitdisplay);

function fruitdisplay(element)
{
    console.log(element);
}


/*********************MAP METHOD***********************/

//.map() = accepts a callback and applies that function to each element of an array, then return a new array

const values = [1,2,3,4,5];
const squares = values.map(square);

console.log(squares);

function square(element)
{
    return Math.pow(element, 2);
}


/************************FILTER METHOD*****************/

// .filter() = creates a new array by filtering out elements

let number = [1,2,3,4,5,6,7];

let evenNums = number.filter(isEven);
console.log(evenNums);

function isEven(element)
{
    //should return onky boolean
    return element % 2 === 0;
}

/******************Reduce Method***********************/

//.reduce() = reduces the elements of the array to a single value.

const prices = [5, 30, 10, 25, 15, 20]

const total = prices.reduce(sum);

console.log(`Total price : ${total}`);

/*
function sum(accumulator, element){
    return accumulator + element;
}
*/
function sum(previousElement, nextElement){
    return previousElement + nextElement;
}