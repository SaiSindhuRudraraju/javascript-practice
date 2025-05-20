/* callback = a function that is passed as an argument to another function.
                used to handle asynchronous operations:
                    1. Reading a file
                    2. Network requests
                    3. Interacting with databases

                    "Hey, when you are done, call this next...!"
*/

function Hello(callback)
{
    console.log("Hello!");
    callback();
}

function GoodBye()
{
    console.log("Good Bye");
}

function leave()
{
    console.log("Leave!");
}

Hello(leave);

/************Example 2********/

function sum(callback, x, y)
{
    let result = x+y;
    callback(result);
}
function displayConsole(result)
{
    console.log(result);
}

function displayPage(result)
{
    document.getElementById("myh1").textContent = result;
}

sum(displayPage, 1, 2);