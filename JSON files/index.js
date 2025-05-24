/**
 *  JSON = (JavaScript Object Notation) data-interchange format
 *          Used for exchanging data between a server and a web application
 *          JSON files {key: value} OR [value1, value2, value3]
 * 
 *          JSON.stringify() = converts a JS object to a JSON string.
 *          JSON.parse() = converts a JSON string to a JS object. 
 */

const jsonnames = `["Sindhu", "Rudraraju", "Squidgame", "superman"]`;

const jsonperson = `{"id": 1, "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "hobbies": ["Fishing", "cooking", "dancing"] }`;

const jsonpeople = `[{"id": 1,"firstName": "John","lastName": "Doe","email": "john.doe@example.com"},
  {"id": 2,"firstName": "Jane","lastName": "Smith","email": "jane.smith@example.com"},
  {"id": 3,"firstName": "Alice","lastName": "Johnson","email": "alice.johnson@example.com"},
  {"id": 4,"firstName": "Bob","lastName": "Brown","email": "bob.brown@example.com"},
  {"id": 5,"firstName": "Sindhu","lastName": "Rudraraju","email": "sindhu.r@example.com"}]`;

const parsedData = JSON.parse(jsonnames);
console.log(jsonnames);
console.log(parsedData);

const parsedData1 = JSON.parse(jsonpeople);
console.log(jsonpeople);
console.log(parsedData1);

/*
const jsonString = JSON.stringify(names);

console.log(names);
console.log(jsonString);

const personString = JSON.stringify(person);
console.log(person);
console.log(personString);

const peopleString = JSON.stringify(people);
console.log(people);
console.log(peopleString);
*/

//************FETCH**************** */

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))