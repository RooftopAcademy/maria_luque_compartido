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
    findByCategory(cat){
      return  this.desserts.filter(function(des){
            if(des.category.toUpperCase()==cat){
                return des;
            }
        });
    }
}
