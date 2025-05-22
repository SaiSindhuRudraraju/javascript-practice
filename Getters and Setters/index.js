/**
 * getter = special method that makes a property readable
 * setter = special method that makes a property writable
 * 
 * validate and modify a value when reading/writing a property
 */

class Rectangle
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }

    set width( newWidth )
    {
        if(newWidth > 0)
        {
            this._width = newWidth;     // _width tells that it is a private property (just some naming basics) 
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    get width()
    {
        return `${this._width.toFixed(1)}cm`;
    }

    set height( newHeight )
    {
        if(newHeight > 0)
        {
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get height()
    {
        return this._height.toFixed(1);
    }

    get area()
    {
        return (this._width * this._height).toFixed(1);
    }
}

//const rectangle = new Rectangle(-100000, "pizza");
//console.log(rectangle.width, rectangle.height);
//rectangle.width = 5;
//rectangle.height = 6;
// console.log(rectangle.width, rectangle.height);
const rectangle1 = new Rectangle(100, 30);
console.log(rectangle1.width, rectangle1.height);
console.log(rectangle1.area);

/***********************EXAMPLE 2******************* */

class Person
{
    constructor(firstname, lastname, age)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname( newFirstname )
    {
        if(typeof(newFirstname) === "string" && newFirstname.length > 0)
        {
            this._firstname = newFirstname;
        }
        else{
            console.error("Firstname must be a non empty string");
        }
    }

    get firstname()
    {
        return this._firstname;
    }

    set lastname( newLastname )
    {
        if(typeof(newLastname) === "string" && newLastname.length > 0)
        {
            this._lastname = newLastname;
        }
        else{
            console.error("Lastname must be a non empty string");
        }
    }

    get lastname()
    {
        return this._lastname;
    }

    set age( newAge )
    {
        if(typeof(newAge) === "number" && newAge > 0)
        {
            this._age = newAge;
        }
        else{
            console.error("Age must be a positive number");
        }
    }

    get age()
    {
        return this._age;
    }

    get fullname()
    {
        return this._firstname + " " + this._lastname
    }
}

const person = new Person("sindhu","Rudraraju",24);
console.log(person.firstname, person.lastname, person.age);
console.log(person.fullname);