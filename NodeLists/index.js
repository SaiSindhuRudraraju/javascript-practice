/**  NodeList = Static collection of HTML elements by (id, class, element)
*               Can be created by using querySelectorAll()
*               Similar to an array, but no (map, filter, reduce), have forEach
*               NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".mybtns");

buttons.forEach( button => {
    button.style.backgroundColor = "green";
    //button.textContent += "😁";
});

buttons.forEach( button => {
    button.addEventListener( "click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach( button => {
    button.addEventListener( "mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 50%)";
    });
});

buttons.forEach( button => {
    button.addEventListener( "mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "mybtns";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".mybtns")