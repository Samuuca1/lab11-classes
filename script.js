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

store.addProduct(milk);
store.addProduct(chicken);
store.addProduct(watermelon);

console.log("Total Inventory Value: $" + store.getInventoryValue().toFixed(2));

const searchResult = store.findProductByName("chicken");
console.log(searchResult ? searchResult.toString() : "Product not found");

