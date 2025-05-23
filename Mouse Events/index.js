/**
 * event listener = listen for specific events to create interative web pages
 * events: click, mouseover, mouseout
 * .addEventListener(event, callback)
 */

const box = document.getElementById("emoji-box");

// Mouse over = Happy
box.addEventListener("mouseover", () => {
  box.textContent = "😄 Smile!";
  box.style.backgroundColor = "#d4f7dc";
});

// Mouse out = Sad
box.addEventListener("mouseout", () => {
  box.textContent = "😢 Come back!";
  box.style.backgroundColor = "#ffe4e1";
});

// Single click = Surprise
box.addEventListener("click", (event) => {
  event.stopPropagation(); // prevent outer click reset
  box.textContent = "😮 Ouch!";
  box.style.backgroundColor = "#fdfd96";
});

// Double click = Love
box.addEventListener("dblclick", (event) => {
  event.stopPropagation(); // prevent outer click reset
  box.textContent = "😍 Double Love!";
  box.style.backgroundColor = "#ffb6c1";
});

// Right-click = Angry
box.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.stopPropagation(); // prevent outer click reset
  box.textContent = "😠 Hey! No right-click!";
  box.style.backgroundColor = "#f08080";
});

// 👈 Click anywhere outside the box
document.addEventListener("click", () => {
  box.textContent = "👋 Hello!";
  box.style.backgroundColor = "#ffefd5";
});
