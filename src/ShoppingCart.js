class ShoppingCart {
    constructor() {
        this.desserts = [];
    }
    addDessert(dessert) {
        //Validación buscando lo que se espera
        if (dessert instanceof Dessert) {
            this.desserts.push(dessert);
        } else {
            //Error en la consola, se debe indicar lo que se espera obtener
            throw new Error('El parámetro 1 debe ser del tipo Dessert'); //Error para la aplicación y no para el usuario
            //Error también es un objeto,
        }

    }

    showDessert() {
        console.log(this.desserts);
    }

    calcTotal() {
        return this.desserts
            .map(price => price)
            .reduce((acum, price) => acum + price, 0)
    }

    printTicket() {
        console.log(`Total a pagar ${this.calcTotal()}`);
    }

}