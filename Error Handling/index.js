// Error: An object that is created to represent a problem that occurs.
//        Occur often with user input or establishing a connection
/**
 * try {} = The try block is used to wrap code that might throw an error. If an error occurs, control is transferred to the catch block.
 * catch {} = The catch block handles the error thrown in the try block. It catches the exception and allows you to respond or log the issue without crashing the program.
 * Finally {} = The finally block contains code that will always run, whether an error occurred or not. It's used for cleanup tasks, like closing files or connections.
 * throw {} = The throw statement is used to manually create (throw) an error. You can throw built-in error objects or custom messages.
 */
//try used to handle:
//Network errors
//Promise rejections
//security errors

//inally used for:
//close files
//close connections
//release resources

function divide() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const resultDiv = document.getElementById('result');

  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Please enter valid numbers.");
    }

    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    const result = a / b;
    resultDiv.innerHTML = `Result: ${result.toFixed(2)}`;
  } catch (err) {
    resultDiv.innerHTML = `Error: ${err.message}`;
  } finally {
    console.log("Division attempted.");
  }
}
