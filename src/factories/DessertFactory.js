class DessertFactory {
    static create(obj) {
        let dessert = new Dessert;

        dessert.name = obj.name;
        dessert.price = obj.price;
        dessert.id = obj.id;
        dessert.image = obj.image;
        dessert.category = obj.category;

        return dessert
    }
}