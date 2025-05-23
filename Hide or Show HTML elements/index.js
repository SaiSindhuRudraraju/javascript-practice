const mybtn = document.getElementById("mybtn");
const myimg = document.getElementById("myimg");

mybtn.addEventListener("click", event => {
    if(myimg.style.visibility === "hidden")
    {
        myimg.style.visibility = "visible";
        mybtn.textContent = "Hide";
    }
    else
    {
        myimg.style.visibility = "hidden";
        mybtn.textContent = "Show";
    }
});