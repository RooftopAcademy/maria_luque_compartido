class Store {
    constructor() {
        this.user = new User;
        this.catalog = new Catalog;
        this.shoppingCart = new ShoppingCart;
        this.footer = new Footer;
    }
    getCatalog() {
        return this.catalog;
    }
    getCart() {
        return this.shoppingCart;
    }
    getFooter() {
        return this.footer;
    }

    //cargar catalogo

    fetchDesserts() {

        let data = [
            { id: 1, name: "Pancakes", image: "img/img-desserts/panqueques.jpg", price: 200, category: " Pancake" },
            { id: 2, name: "Carrot Cupcake", image: "img/img-desserts/bizcocho-avena-zanahoria-almendra.jpg", price: 250, category: " Cupcake" },
            { id: 3, name: "Lemon Cupcake", image: "img/img-desserts/bizcocho-limon.jpg", price: 300, category: " Cupcake" },
            { id: 4, name: "Orange Cupcake", image: "img/img-desserts/bizcocho-naranja.jpg", price: 200, category: " Cupcake" },
            { id: 5, name: "Vanilla Cupcake", image: "img/img-desserts/bizcocho.jpg", price: 100, category: " Cupcake" },
            { id: 6, name: "Cookie Brownie", image: "img/img-desserts/brownie-galleta.jpg", price: 200, category: " Brownie" },
            { id: 7, name: "Pear Brownie", image: "img/img-desserts/brownie-pera.jpg", price: 300, category: " Brownie" },
            { id: 8, name: "Banana Brownie", image: "img/img-desserts/brownie-platano.jpg", price: 200, category: " Brownie" },
            { id: 9, name: "Mango Crumbre Cake", image: "img/img-desserts/crumble-mango.jpg", price: 200, category: " Crumble" },
            { id: 10, name: "Apple Crumble Cake", image: "img/img-desserts/crumble-manzana.jpg", price: 250, category: " Crumble" },
            { id: 11, name: "Coffe Custard", image: "img/img-desserts/flan-cafe.jpg", price: 200, category: " Custard" },
            { id: 12, name: "Chocolate Custard", image: "img/img-desserts/flan-chocolate.jpg", price: 400, category: " Custard" },
            { id: 13, name: "Apple Custard", image: "img/img-desserts/flan-manzana.jpg", price: 500, category: " Custard" },
            { id: 14, name: "Chocolate Mousse", image: "img/img-desserts/mousse-chocolate.jpg", price: 200, category: " Other" },
            { id: 15, name: "Frost Cake", image: "img/img-desserts/tarta-helada.jpg", price: 100, category: " Cake" },
            { id: 16, name: "Apple Cake", image: "img/img-desserts/tarta-manzana.jpg", price: 200, category: " Cake" },
            { id: 17, name: "Lemon Marcapone Cake ", image: "img/img-desserts/tarta-mascarpone-limon.jpg", price: 300, category: " Cake" },
            { id: 18, name: "Pineapple Cake ", image: "img/img-desserts/tarta-queso-piña.jpg", price: 400, category: " Cake" },
            { id: 19, name: "Cheese Cake ", image: "img/img-desserts/tarta-queso.jpg", price: 200, category: " Cake" },

        ]

        data.forEach((item) => {
            // let dessert = DessertFactory.create(item)
            this.catalog.addDessert(DessertFactory.create(item))
        })

    }

    fetchNetworks() {
        let data = [
            { id: 1, name: "Facebook", image: "img/facebook.png" },
            { id: 2, name: "Youtube", image: "img/youtube.png" },
            { id: 3, name: "Twiter", image: "img/twiter.png" },
            { id: 4, name: "Instagram", image: "img/instagram.png" },

        ]
        data.forEach((item) => {

            this.footer.addNetwork(NetworkFactory.create(item));
        })
    }


}