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