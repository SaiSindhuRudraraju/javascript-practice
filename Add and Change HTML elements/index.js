// step 1: Create the element
const newH1 = document.createElement("h1");

// step 2: Add attributes/properties
newH1.textContent = "I Like pizza!!!";
newH1.id = "myh1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// step 3: append element to dom
//document.body.append(newH1);
//document.body.prepend(newH1);
document.getElementById("box1").append(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

// remove HTML element

document.getElementById("box1").removeChild(newH1);
