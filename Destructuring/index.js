/**
 * Destructuring = extract values from arrays and objects,
 *                  then assign them to variables in a convenient way
 *                  [] = to perform array destructuring
 *                  {} = to perform object destructuring
 *                  It's a concise way to unpack values from arrays 
 *                  (or properties from objects) into distinct variables.
 */

/**********************EXAMPLE 1*************** */
// SWAP the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`)

/**
 * The right-hand side [b, a] is evaluated first, based on the current values:
    [b, a] => [2, 1]
    Then, destructuring assignment unpacks those values into the left-hand side:

    [a, b] = [2, 1];
     So:
    a = 2;
    b = 1;
*/

/****************EXAMPLE 2******************** */
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[ colors[0], colors[4] ] = [ colors[4], colors[0]];

console.log(colors);

/****************EXAMPLE 3*********************** */
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// consider const colors = ["red", "green", "blue", "black", "white"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

/****************EXAMPLE 4***************************/
// EXTRACT VALUES FROM OBJECTS  

const person1 = {
    firstname : "Sindhu",
    lastname : "Rudraraju",
    age : 24,
    job : "Software Developer",
}

const person2 = {
    firstname : "Sai",
    lastname : "R",
    age : 24,
}

const {firstname, lastname, age, job="Traveler"} = person1;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

//const {firstname1, lastname1, age1} = person2;
//console.log(firstname1);
//console.log(lastname1);
//console.log(age1);
//console.log(job1);

/*****************EXAMPLE 5******************/
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstname, lastname, age, job="Traveler"})
{
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);