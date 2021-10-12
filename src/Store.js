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
            { id: 1, name: "Pancakes", image: "img/img-desserts/panqueques.jpg", price: 200, stock:10,category: "Pancake" ,description: ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 2, name: "Carrot Cupcake", image: "img/img-desserts/bizcocho-avena-zanahoria-almendra.jpg", price: 250, stock:20,category: "Cupcake",description: ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 3, name: "Lemon Cupcake", image: "img/img-desserts/bizcocho-limon.jpg", price: 300,stock:20, category: "Cupcake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 4, name: "Orange Cupcake", image: "img/img-desserts/bizcocho-naranja.jpg", price: 200, stock:30,category: "Cupcake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 5, name: "Vanilla Cupcake", image: "img/img-desserts/bizcocho.jpg", price: 100,stock:29, category: "Cupcake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 6, name: "Cookie Brownie", image: "img/img-desserts/brownie-galleta.jpg", price: 200,stock:10, category: "Brownie",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 7, name: "Pear Brownie", image: "img/img-desserts/brownie-pera.jpg", price: 300,stock:2, category: "Brownie",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 8, name: "Banana Brownie", image: "img/img-desserts/brownie-platano.jpg", price: 200, stock:30,category: "Brownie",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 9, name: "Mango Crumbre Cake", image: "img/img-desserts/crumble-mango.jpg", price: 200, stock:10,category: "Crumble" ,description: ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 10, name: "Apple Crumble Cake", image: "img/img-desserts/crumble-manzana.jpg", price: 250,stock:20, category: "Crumble",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 11, name: "Coffe Custard", image: "img/img-desserts/flan-cafe.jpg", price: 200,stock:15, category: "Custard",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 12, name: "Chocolate Custard", image: "img/img-desserts/flan-chocolate.jpg", price: 400,stock:16, category: "Custard",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 13, name: "Apple Custard", image: "img/img-desserts/flan-manzana.jpg", price: 500,stock:17, category: "Custard",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 14, name: "Chocolate Mousse", image: "img/img-desserts/mousse-chocolate.jpg", price: 200,stock:20, category: "Others",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 15, name: "Frost Cake", image: "img/img-desserts/tarta-helada.jpg", price: 100, stock:22,category: "Cake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 16, name: "Apple Cake", image: "img/img-desserts/tarta-manzana.jpg", price: 200,stock:23, category: "Cake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 17, name: "Lemon Marcapone Cake ", image: "img/img-desserts/tarta-mascarpone-limon.jpg", price: 300,stock:40, category: "Cake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 18, name: "Pineapple Cake ", image: "img/img-desserts/tarta-queso-piña.jpg", price: 400, stock:20,category: "Cake" ,description: ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},
            { id: 19, name: "Cheese Cake ", image: "img/img-desserts/tarta-queso.jpg", price: 200, stock:10,category: "Cake",description:  ["Lorem ipsum dolor sit amet","Consectetur adipisicing elit. Qui magni nostrum, veritatis maxime totam iure."]},

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