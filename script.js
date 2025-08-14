//Basic ProductProperties Class with a constructor

class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    //Method to return the total value (price * quantity)
    getTotalValue() {
        return this.price * this.quantity;
    }

    //Returns a string representation of the product
    toString() {
        return `Product: ${this.name}, Price: CAD${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }


    // Static method to apply discount
    static applyDiscount(products, discount) {
        if (!Array.isArray(products) || typeof discount !== "number" || discount < 0 || discount > 1) {
            throw new Error("Invalid input for applyDiscount.");
        }

        products.forEach(product => {
            if (product instanceof ProductProperties) {
                product.price -= product.price * discount;
            }
        });
    }
}





//Creating a sub class and its expansion constructor

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // calling parent constructor
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

//TEsting code

const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-10-11");
const chicken = new PerishableProductProperties("Chicken", 7.20, 15, "2025-05-17");
const watermelon = new ProductProperties("Watermelon", 5, 20);

console.log("Before Discount:");
console.log(milk.toString());
console.log(chicken.toString());
console.log(watermelon.toString());