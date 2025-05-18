const mybutton = document.getElementById("mybutton");
const mylable1 = document.getElementById("mylable1");
const mylable2 = document.getElementById("mylable2");
const mylable3 = document.getElementById("mylable3");

const min = 1;
const max = 6;

mybutton.onclick = function(){   
    mylable1.textContent = Math.floor(Math.random() * (max)) + min;
    mylable2.textContent = Math.floor(Math.random() * (max)) + min;
    mylable3.textContent = Math.floor(Math.random() * (max)) + min;
}