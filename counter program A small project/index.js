const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLable = document.getElementById("countlable");
let count = 0;

decreaseBtn.onclick = function(){
    count --;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}
increaseBtn.onclick = function(){
    count ++;
    countLable.textContent = count;
}