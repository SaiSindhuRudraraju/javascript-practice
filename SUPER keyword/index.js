/**
 * super = keyword is used in classes to call the constructor or access the
 *          properties and methods of a parent (superclass)
 *          this = this object
 *          super = the parent
 */
// inheritance = allows a new class to inherit properties and methods from as existing class (parent -> child)
// helps with code reusability

/*
class Animal
{
    constructor()
    {

    }
}

class Rabbit extends Animal
{
    constructor(name, age, runSpeed)
    {
        super();

        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super();

        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal
{
    constructor(name, age, flySpeed)
    {
        super();

        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit" , 1, 25);
const fish = new Fish("Fish" , 2, 12);
const hawk = new Hawk("Hawk" , 3, 50);
*/

class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}

class Rabbit extends Animal
{
    constructor(name, age, runSpeed)
    {
        super(name, age);

        this.runSpeed = runSpeed;
    }
    run()
    {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age);

        this.swimSpeed = swimSpeed;
    }
    swim()
    {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal
{
    constructor(name, age, flySpeed)
    {
        super(name, age);

        this.flySpeed = flySpeed;
    }
    fly()
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit" , 1, 25);
const fish = new Fish("Fish" , 2, 12);
const hawk = new Hawk("Hawk" , 3, 50);

console.log(rabbit.name, rabbit.age, rabbit.runSpeed);
rabbit.move(rabbit.runSpeed);
rabbit.run();

console.log(fish.name, fish.age, fish.swimSpeed);
fish.move(fish.swimSpeed);
fish.swim();

console.log(hawk.name, hawk.age, hawk.flySpeed);
hawk.move(hawk.flySpeed);
hawk.fly();