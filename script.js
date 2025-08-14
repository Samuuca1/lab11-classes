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
}
