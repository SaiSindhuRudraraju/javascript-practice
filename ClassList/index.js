/**
 *  classList = Element property in Javascript used to interact with an element's
 *              list of classes (CSS classes).
 *              Allows you to make reusable classes for many elements across
 *              your webpage.
 * 
 * 
 *  add()
 *  remove()
 *  toggle(Remove if present, Add if not)
 *  replace(oldClass, newClass)
 *  contains()
 */

const mybtn = document.getElementById("mybtn");

mybtn.classList.add("enabled");
//mybtn.classList.remove("enabled");

/*
mybtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

mybtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});
*/

/*
mybtn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

mybtn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/

mybtn.addEventListener("click", event => {
    if(event.target.classList.contains("disabled"))
    {   
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled", "disabled")
    }
    
});