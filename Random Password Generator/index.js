/*
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0)
    {
        return `(Password lenght must be atleast 1)`;
    }
    if(allowedChars.length === 0)
    {
        return `(Al least 1 set of characters need to be selected)`;
    }

    for(let i = 0; i <  length; i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);

*/


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (length <= 0) {
    return "Password length must be at least 1";
  }

  if (allowedChars.length === 0) {
    return "At least one character type must be selected";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

  document.getElementById("passwordOutput").textContent = password;
});
