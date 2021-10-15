
import Dessert from "./Dessert";

export default class ShoppingCart{
    desserts :Dessert[] =[];

    addDessert(dessert:Dessert) {
        if (dessert) {
            this.desserts.push(dessert);
        } else {
            //Error en la consola, se debe indicar lo que se espera obtener
            throw new Error('El parámetro 1 debe ser del tipo Dessert'); //Error para la aplicación y no para el usuario
            
        }

    }

    showDessert() {
        return this.desserts;
    }

    // calcTotal() {
    //     return this.desserts
    //         .map((price:Dessert) => price)
    //         .reduce((acum:number, price) => acum + price, 0)
    // }
    // printTicket() {
    //     console.log(`Total a pagar ${this.calcTotal()}`);
    // }

}
