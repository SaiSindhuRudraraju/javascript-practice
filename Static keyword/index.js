// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

class MathUtil
{
    static PI = 3.14159;

    static getDiameter(radius)
    {
        return radius*2;
    }

    static getCircumference(radius)
    {
        return 2 * this.PI * radius;
    }
}

console.log(MathUtil);
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));


const MathUtil1 = new MathUtil();
console.log(MathUtil1.PI);

/**********EXAMPLE 2*****************/

class User
{
    static userCount = 0;

    constructor(username)
    {
        this.username = username;
        User.userCount++;
    }

    sayHello()
    {
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount()
    {
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Sindhu");
console.log(user1.username, User.userCount);
user1.sayHello();
User.getUserCount();

const user2 = new User("Sai");
console.log(user2.username, User.userCount);
user2.sayHello();
User.getUserCount();