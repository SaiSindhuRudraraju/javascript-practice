/**
 *  setTimeout() = function in Javascript that allows you to schedule the 
 *                 execution of a function after an amount of time (milliseconds)
 *                  
 *                 Times are approximate (varies based on the workload of the 
 *                 javascript runtime environment)
 * 
 *                 setTimeout( callback, delay);
 * 
 *  clearTimeout(timeoutId) = can cancel a timeout before it triggers
 */

function sayHello()
{
    window.alert("Hello");
}

//setTimeout(sayHello, 3000);

//setTimeout( function(){window.alert("Hello")}, 3000 );

//const timeoutId = setTimeout( () => window.alert("Hello"), 3000);

// clearTimeout(timeoutId);        //we canceld so nothing will come as output

let timeoutId;

function startTimer()
{
    timeoutId = setTimeout( () => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer()
{
    clearTimeout(timeoutId); 
    console.log("CLEARED");
}