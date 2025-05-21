//Object = A collection of related properties and/or methods
//      Can represent real world objects (people, products, places)
//      objectt = {key:value, function()}

const person1 = {
    firstname: "SpongeBob",
    lastname: "SquarePants",
    age: 30,
    isEmployed: false,

    sayHello: function(){console.log(`Hello, I am ${this.firstname}`);}
}

const person2 = {
    firstname: "Sindhu",
    lastname: "Rudraraju",
    age: 24,
    isEmployed: true,

    sayHello: function(){console.log(`Hello, I am ${this.firstname}`);}
}


console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();

/*************THIS keyword*******************/

/*
    this = reference to the object where THIS is used.
    (the object depends on the immediate context)
    person.name = this.name

    this keyword does not work with arrow function as it will still refer window object.
*/

const student = {
    firstname: "Ram",
    class: "5",

    sayHello: function(){console.log(`Hi!! I am ${this.firstname}. I am stydying in ${student.class}th class.`)}
}
//student.class = this.class when we are in student context. Outside will not be same.
student.sayHello();

console.log(this);      // return window object (our website)

/************((( CONSTRUCTORs)))********************/

/*
    constructor = special method for defining the properties and methods of objects
*/

function Car(make, model, year, color)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){ console.log(`You drive ${this.make} ${this.model} `)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
console.log(car1.make, car1.model, car1.year, car1.color);
car1.drive();

const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
console.log(car2);
car2.drive()