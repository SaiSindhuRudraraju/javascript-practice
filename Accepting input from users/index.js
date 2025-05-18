/*
//accepting from window prompt
let username;

username = window.prompt("What is your username?");

console.log(username);

*/

//HTML Textbox

let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("text1").value;
    console.log(username);

    document.getElementById("myh1").innerHTML = `Hello ${username}`;
}

let age = window.prompt("How old are you");
age = Number(age);
age+=1;
console.log(age,typeof(age));