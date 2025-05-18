//Method chaining
/*
Method chaining in JavaScript is when multiple methods are called on the same object in a single line, one after another. It’s commonly used with built-in objects like strings, arrays, and libraries like jQuery.
*/

document.getElementById("formatBtn").addEventListener("click", () => {
    let input = document.getElementById("inputText").value;

    // Chained string methods
    let formatted = input
                      .trim()
                      .toUpperCase()
                      .replace("JAVASCRIPT", "JS");

    document.getElementById("outputText").textContent = formatted;
});
