// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions 
// It will be useful by having static keyword, encapsulation, inheritance

class Products
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price
    }

    displayProduct()
    {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }

    calulateTotal(salesTax)
    {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("laptop", 10000);
product1.displayProduct();

console.log(product1.calulateTotal(salesTax));

const product2 = new Products("Camera", 5000);
product2.displayProduct();

const total2 = product2.calulateTotal(salesTax);
console.log(total2);
