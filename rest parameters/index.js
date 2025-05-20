/*

rest parameters = (...rest) [prefixed with ...].
                They allow a function to work with a variable number of arguments by bundling them into an array.
                rest parameters allow a function to accept an indefinite number of arguments as an array

                You can only have one rest parameter in a function.

                It must be the last parameter.

                Useful when you don't know how many arguments will be passed.

Its very similar to spread operator.
spread = expands an array into separate elements.

rest = bundles sperate elements into an array.
*/

function showItems(...foods)
{
    console.log(...foods.join(",\n"));
}

function getItems(...foods)
{
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "salad";
const food4 = "eggs";

showItems(food1, food2, food3, food4, "milk");

const allfoods = getItems(food1, food2, food3, food4, "milk");

console.log(allfoods);

/**********************************/

function sum(...numbers)
{
    let result = 0;

    for(let number of numbers)
    {
        result += number;
    }
    return result;
}

const total = sum(1);
console.log(`Total = ${total}`);

const total1 = sum(1,2,3,4);
console.log(`Total = ${total1}`);

const total2 = sum(10,40,12);
console.log(`Total = ${total2}`);

function getAverage(...numbers)
{
    let result = 0;

    for(let number of numbers)
    {
        result += number;
    }
    return result / numbers.length;
}

const avg = getAverage(75, 100, 85, 90, 50);
console.log(`Average = ${avg}`);

/*****Example 3 Combining strings together********* */

function conbimeString(...words)
{
    return words.join(" ");
}

const fullname = conbimeString("Ms.","Sindhu","Rudraraju","I");
console.log(fullname);
