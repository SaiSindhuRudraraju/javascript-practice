/**
 *  closure = A function defined inside of another function,
 *            the inner function has access to the variables and scope of the
 *            outer function.
 *            Allow for private variables and state maintenance
 *            Used frequently in JS frameworks: React, Vue, Angular
 */

function Outer()
{
    let message = "Hello";

    function Inner()
    {
        console.log(message);
    }

    Inner();
}

Outer();

//*** EXMAPLE 2**********/
function createCounter()
{
    let count = 0;

    function increment()
    {
        count++;
        console.log(`Count Increased to ${count}`);
    }

    function getCount()
    {
        return count;
    }

    return {increment, getCount};         //returning an function (reference)object. short form of {obj:increment}
}

const counter = createCounter();    //we are calling outer function only once to retain state (state management)
counter.increment();    //we are changing count, maintaining privacy. here we cannot access count directly. for example see below lines output:

//console.log(count); //index.js:40 Uncaught ReferenceError: count is not defined
//console.log(counter.count) //undefined or error
        // So privacy is maintained.

counter.increment();
counter.increment();
counter.increment();
counter.increment();


console.log(`The current count is ${counter.getCount()}`);


//********EXAMPLE 2*********/

function createGame()
{
    let score = 0;

    function increaseScore(points)
    {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points)
    {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore()
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);