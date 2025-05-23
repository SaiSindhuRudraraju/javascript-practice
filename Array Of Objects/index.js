const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits[2].calories);
console.log(fruits[3].color);

fruits.push({name: "grapes", color: "purple", calories:62});
console.log(fruits);

fruits.forEach(fruit => console.log(fruit.name, fruit.color, fruit.calories));

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);


const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalorieFruits);

//reduce()

const maxFruit = fruits.reduce((max, fruit) => 
                                    fruit.calories > max.calories   ?   
                                    fruit   :   max);
console.log(`High calorie fruit: ` + maxFruit.name + " " + maxFruit.color + " " + maxFruit.calories);

const totalCalories = fruits.reduce((total, fruit) => total + fruit.calories, 0);
console.log(`Total calories = `+ totalCalories);


console.log(fruits.pop())
console.log(fruits);

console.log(fruits.splice(1,2));
console.log(fruits);