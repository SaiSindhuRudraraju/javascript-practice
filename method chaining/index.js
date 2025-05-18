let username = window.prompt("Enter your username: ");
myusername = username;

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

myusername = myusername.trim().charAt(0).toUpperCase() + myusername.trim().slice(1).toLowerCase();

console.log(myusername);