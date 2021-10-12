class Dessert {
    constructor() {
            this._name = String;
            this._id = Number;
            this._price = Number;
            this._description = [];
            this._stock = Number;
            this._image = String;
            this._imagesSmall=[]
            this._category = String;
        }
        // setters
    set name(newName) {
        this._name = newName;
    }
    set id(id) {
        this._id = id;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    set stock(newStock) {
        this._stock = newStock;
    }
    set image(newImage) {
        this._image = newImage;
    }
    set category(newCategory) {
            this._category = newCategory;
        }
        // getters
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
    get description() {
        return this._description;
    }
    get stock() {
        return this._stock;
    }
    get image() {
        return this._image;
    }
    get category() {
        return this._category;
    }
    getAllData() {
        console.log(`Name: ${this._name}, Id: ${this._id}, Price: ${this._price} , Stock: ${this._stock},Category: ${this._category}`)
    }
}
