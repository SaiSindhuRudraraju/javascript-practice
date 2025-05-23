/**
 * eventListener = Listen for specific events to create interactive web pages
 *                 events: keydown, keyup, (keypress -incompatible with some web browsers)
 *                 document.addEventListener(event, callback);
 */

const mybox = document.getElementById("mybox");

document.addEventListener("keydown", event => {
    mybox.textContent = "🤨";
});
document.addEventListener("keyup", event => {
    mybox.textContent = "🤪";
});

const moveAmount = 100;
let x = 0;
let y = 0;

const boxWidth = 100;  // adjust to match your CSS size
const boxHeight = 100;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();

        // Get window width/height
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        switch (event.key) {
            case "ArrowUp":
                if (y - moveAmount >= 0) y -= moveAmount;
                break;
            case "ArrowDown":
                if (y + moveAmount + boxHeight <= windowHeight) y += moveAmount;
                break;
            case "ArrowLeft":
                if (x - moveAmount >= 0) x -= moveAmount;
                break;
            case "ArrowRight":
                if (x + moveAmount + boxWidth <= windowWidth) x += moveAmount;
                break;
        }

        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
});