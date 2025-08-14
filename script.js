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

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }
}


//Testing Code

const store = new StoreProperties();

const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-10-11");
const chicken = new PerishableProductProperties("Chicken", 7.20, 15, "2025-05-17");
const watermelon = new ProductProperties("Watermelon", 5, 20);
const bread = new ProductProperties("Bread", 1.80, 20);
const juice = new ProductProperties("Juice", 3.00, 15);

store.addProduct(milk);
store.addProduct(chicken);
store.addProduct(watermelon);
store.addProduct(bread);
store.addProduct(juice);


// Print total inventory value before discount
console.log("=== Before Discount ===");
console.log("Total Inventory Value: $" + store.getInventoryValue().toFixed(2));

// Print total inventory value after discount
ProductProperties.applyDiscount(store.inventory, 0.15);

console.log("\n=== After 15% Discount ===");
console.log("Total Inventory Value: $" + store.getInventoryValue().toFixed(2));

// Find and print a specific product
console.log("\n=== Search Result ===");
const searchName = "Chicken";
const foundProduct = store.findProductByName(searchName);
console.log(foundProduct ? foundProduct.toString() : `${searchName} not found.`);

console.log("\n=== Search Result ===");
const searchName2 = "Cheese";
const foundProduct2 = store.findProductByName(searchName2);
console.log(foundProduct2 ? foundProduct2.toString() : `${searchName2} not found.`);