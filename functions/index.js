let x = window.prompt("Enter x");   //global scope variable
let y = window.prompt("Enter y");   //global scope variable
x = Number(x);
y = Number(y);

console.log(add(x,y));

function add(x,y)
{
    ans = x+y;      // ans is local scope variable
    return ans;
}
