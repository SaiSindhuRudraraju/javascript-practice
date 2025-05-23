/**
 *  DOM = DOCUMENT OBJECT MODEL
 *        Object{} that represents the page you see in the web browser
 *        and provides you with an API to interact with it.
 * 
 *        Web browser constructs the DOM when it loads an HTML documet, and 
 *        structures all the elements in a tree-like representation.
 * 
 *        Javascript can access the DOM to dynamically change the content,
 *        structure, and style of a web page.
 */

document.title = "My Website";
document.body.style.backgroundColor = "hsl(0, 20.00%, 93.10%)";
console.log(document);

const username = "Sindhu";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;

/**
 * element selectors: Methods used to target and manipulate HTML elements.
 *                    They allow you to select one or multiple HTML elements
 *                      from the DOM (Document Object Model)
 * 
 * 1. document.getElementById()         // ELEMENT or NULL
 * 2. document.getElementsClassName()   // HTML COLLECTION
 * 3. document.getElementsByTagName()   // HTML COLLECTION
 * 4. document.querySelector()          // ELEMENT or NULL
 * 5. document.guerySelectorAll()       // NODE LIST
 */

/**
 * DOM Element Selectors Examples
 */

// 1. document.getElementById() → Returns a single element or null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// 2. document.getElementsByClassName() → Returns an HTMLCollection
const fruits = document.getElementsByClassName("fruits");
console.log("getElementsByClassName:", fruits);
for (let fruit of fruits) {
  fruit.style.backgroundColor = "lightyellow";
  fruit.style.padding = "10px";
}
Array.from(fruits).forEach(fruit => {
  fruit.style.color = "green";
});

// 3. document.getElementsByTagName() → Returns an HTMLCollection
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);
for (let para of paragraphs) {
  para.style.border = "1px solid gray";
  para.style.marginBottom = "5px";
}

// 4. document.querySelector() → Returns the first matching element
const firstNote = document.querySelector(".note");
firstNote.textContent = "✔ First Note Highlighted";
firstNote.classList.add("highlight");

// You can also query by tag or ID
const span = document.querySelector("span");
span.style.color = "purple";
span.style.fontSize = "20px";

// 5. document.querySelectorAll() → Returns a NodeList (can use forEach)
const allListItems = document.querySelectorAll(".list-item");
allListItems.forEach((item, index) => {
  item.style.backgroundColor = index % 2 === 0 ? "#eee" : "#ccc";
  item.style.padding = "5px";
});

const formInputs = document.querySelectorAll(".form-input");
formInputs.forEach(input => {
  input.style.margin = "10px 0";
  input.style.padding = "5px";
});