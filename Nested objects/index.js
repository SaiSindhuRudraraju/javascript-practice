/**
 *      Nested Objects= Objects inside of other objects.
 *                  Allows you to represent more complex data structures
 *                  Child object is enclosed by a Parent Object
 * 
 *          Person{ Address{}, ContactInfo{} }
 *          ShoppingCart{ Keyboard{}, Mouse{}. Monitor{} }
 */

const Person = {
    fullname : "Sindhu Rudraraju",
    age : 24,
    isStudent : true,
    hobbies: ["Karate", "coding", "cooking"],

    address : {
        street : "123 main street",
        city : "Dallas",
        country : "USA"
    }
}

console.log(Person);
console.log(Person.fullname);
console.log(Person.age);
console.log(Person.isStudent);
console.log(Person.hobbies);
console.log(Person.hobbies[0]);
console.log(Person.hobbies[1]);
console.log(Person.hobbies[2]);
console.log(Person.address);
console.log(Person.address.street);
console.log(Person.address.city);
console.log(Person.address.country);

console.log("**************");
for( const property in Person)
{
    console.log(Person[property]);
}

/******************EXAMPLE 2******************/

class Person1{
    constructor(name, age, ...address)
    {
        this.name= name;
        this.age=age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person1("Spongebob", 30, "124 main st", "Dallas", "USA");
const person2 = new Person1("Patrick", 37, "125 main st", "Dallas", "USA");
const person3 = new Person1("Squidward", 30, "126 main st", "Dallas", "USA");

console.log(person1.name, person1.age, person1.address.street, person1.address.city, person1.address.country);
console.log(person2.name, person2.age, person2.address.street, person2.address.city, person2.address.country);
console.log(person3.name, person3.age, person3.address.street, person3.address.city, person3.address.country);
