/*
---CATALOG
*/
class Catalog {
    constructor() {
        this.desserts = [];
    }
    showAll() {
        return this.desserts;
    }
    addDessert(newDessert) {
        this.desserts.push(newDessert);
    }
//Busca por ID
    findById(id) {
        return this.desserts.find(des => {
            return des.id == id;
        })
    }
//Busca por Categoria
    findByCategory(category){
        return this.desserts.find( des=>{
            // console.log(des)
            // console.log(category)
            // console.log(des.category.toUpperCase())
        //    if (des.category.toUpperCase()==category){
               return des.category.toUpperCase()==category
           

            // console.log("soy un dessert que coincide")
            // return des.category.toUpperCase() === category;
        })
    }
}