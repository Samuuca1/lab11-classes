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


//Create a Store Class
class StoreProperties {
    constructor() {
        this.inventory = [];
    }
    
    addProduct(product) {
        if (product instanceof ProductProperties) {
            this.inventory.push(product);
        } else {
            throw new Error("That is not a product.");
        }
    }
}