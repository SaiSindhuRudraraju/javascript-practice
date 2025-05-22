// inheritance = allows a new class to inherit properties and methods from as existing class (parent -> child)
// helps with code reusability

class Animal
{
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal
{
    name = "Rabbit";

    run()
    {
        console.log(`${this.name} is running`)
    }
}

class Fish extends Animal
{
    name = "Fish";

    swim()
    {
        console.log(`${this.name} is swimming`)
    }
}

class Hawk extends Animal
{
    name = "Hawk";

    fly()
    {
        console.log(`${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();
console.log(rabbit.alive);
rabbit.alive = false;
console.log(rabbit.alive);
rabbit.run();

const fish = new Fish();
fish.eat();
fish.sleep();
console.log(fish.alive);
fish.swim();

const hawk = new Hawk();
hawk.eat();
hawk.sleep();
console.log(hawk.alive);
hawk.fly();

const animal = new Animal();
console.log(animal.alive);
animal.eat();