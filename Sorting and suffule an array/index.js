/**
 *  Sort() = method used to sortelements of an array in place.
 *           Sorts elements as strings in lexicographic order, not alphabetical
 *           lexicographic = (alphabet + numbers + symbols) as string
 */

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1,10,2,9,3,6,4,7,12,0];

numbers.sort();
console.log(numbers);
/**
 * By default, JavaScript's Array.prototype.sort():
 * converts array elements to strings
 * compares them lexicographically (like dictionary order)
 * So it's sorting strings, not numbers:
 * Here's how those values look as strings:
 *      "0", "1", "10", "12", "2", "3", "4", "6", "7", "9"
 * And sorted lexicographically:
 *      "0" < "1" < "10" < "12" < "2" < "3" < "4" < "6" < "7" < "9"
 */

//So we should write a custom sort

numbers.sort( (a, b) => a - b);     // Sort based on value returning (wither negative or positive)
console.log(numbers);

numbers.sort( (a, b) => b - a);
console.log(numbers);

//sorting objects by property

const people = [ {name: "Sindhu", age: 24, gpa: 3.8},
                 {name: "sai", age: 16, gpa: 3.7},
                 {name: "Superman", age: 45, gpa: 3.0},
                 {name: "Spiderman", age: 34, gpa: 2.3},
                 {name: "captain America", age: 97, gpa: 3.5}
]

//people.sort((person1, person2) => person1.age - person2.age);
//console.log(people);

//people.sort((person1, person2) => person1.gpa - person2.gpa);
//console.log(people);

//people.sort((person1, person2) => person2.age - person1.age);
//console.log(people);

people.sort((person1, person2) => person1.name.localeCompare(person2.name));
console.log(people);

people.sort((person1, person2) => person2.name.localeCompare(person1.name));
console.log(people);


/********************* SHUFFLE AN ARRAY ************************/

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//cards.sort( () => Math.random() - 0.5);
        // Result will be perfectly uniformed. Not recommended for large array
//console.log(cards);

//***************Fisher-Yates algorithm**************

function shuffle(cards)
{
    for(let i= cards.length - 1; i > 0; i--)
    {
        const random = Math.floor(Math.random() * (i+1));

        [ cards[i], cards[random] ] = [ cards[random], cards[i] ];
    }
}

shuffle(cards);
console.log(cards);