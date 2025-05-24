// callback Hell 
/**
Callback Hell (also called the Pyramid of Doom) happens when multiple asynchronous operations (like API calls, file reads, timeouts) are nested inside one another, leading to:
    Difficult-to-read code
    Harder debugging
    Error handling nightmares

    situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
    Old pattren to handle asynchronous functions.
    Use Promises + async/await to avoid Callback Hell
 */

    /*
console.log("Start making a sandwich...");

setTimeout(() => {
  console.log("1. Get bread 🍞");

  setTimeout(() => {
    console.log("2. Add peanut butter 🥜");

    setTimeout(() => {
      console.log("3. Add jelly 🍓");

      setTimeout(() => {
        console.log("4. Put bread together 🥪");

        setTimeout(() => {
          console.log("5. Eat sandwich 😋");
        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

*/

const sandwich = document.getElementById("sandwich");

function addIngredient(ingredient, callback) {
  setTimeout(() => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    sandwich.appendChild(li);
    callback();
  }, 1000);
}

function startMakingSandwich() {
  sandwich.innerHTML = ""; // Clear previous sandwich

  addIngredient("🍞 Bread", () => {
    addIngredient("🥬 Lettuce", () => {
      addIngredient("🍅 Tomato", () => {
        addIngredient("🧀 Cheese", () => {
          addIngredient("🍗 Chicken", () => {
            addIngredient("🍞 Top Bread", () => {
              addIngredient("✅ Done!", () => {
                console.log("Sandwich is ready! This is Callback Hell.");
              });
            });
          });
        });
      });
    });
  });
}
