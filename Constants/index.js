const PI = 3.14159;
let radius;
let curcumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("text1").value;
    radius = Number(radius);
    curcumference = 2 * PI * radius;

    document.getElementById("myh3").textContent = curcumference + " cm";
}