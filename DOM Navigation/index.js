/*************** DOM Navigation **************/

/**
 * DOM Navigation = The process of navigating through the structure
 * of an HTML document using JavaScript.
 *
 * Common properties:
 * - .firstElementChild
 * - .lastElementChild
 * - .nextElementSibling
 * - .previousElementSibling
 * - .parentElement
 * - .children
 */

// Selecting the <ul> elements by their IDs
const fruitList = document.getElementById("fruits");
const vegetableList = document.getElementById("vegetables");
const dessertList = document.getElementById("desserts");

// 1. .firstElementChild → gets the first <li> in each list
const firstFruit = fruitList.firstElementChild;
firstFruit.style.color = "red"; // Apple

const firstVeg = vegetableList.firstElementChild;
firstVeg.style.color = "green"; // Carrots

const firstDessert = dessertList.firstElementChild;
firstDessert.style.color = "chocolate"; // cake

const allFoodsLists = document.querySelectorAll("ul");

allFoodsLists.forEach(allFoodsList => {
    const firstChild = allFoodsList.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})


// 2. .lastElementChild → gets the last <li> in each list
const lastFruit = fruitList.lastElementChild;
lastFruit.style.fontWeight = "bold"; // Banana

const lastVeg = vegetableList.lastElementChild;
lastVeg.style.fontWeight = "bold"; // Potatoes

const lastDessert = dessertList.lastElementChild;
lastDessert.style.fontWeight = "bold"; // ice cream


// 3. .nextElementSibling → next <ul> in the HTML
const nextToFruits = fruitList.nextElementSibling;
nextToFruits.style.border = "2px solid green"; // vegetable list


// 4. .previousElementSibling → not applicable to fruits (it's the first list)
const nextToVegetables = vegetableList.previousElementSibling;
nextToVegetables.style.border = "2px solid orange"; // dessert list


// 5. .parentElement → get the <body> of the page
const parentOfDesserts = dessertList.parentElement;
parentOfDesserts.style.backgroundColor = "lightblue"; // light background for demo


// 6. .children → list all children <li> items inside fruits
const fruitItems = fruitList.children;
for (let item of fruitItems) {
  item.style.border = "1px solid";
}
