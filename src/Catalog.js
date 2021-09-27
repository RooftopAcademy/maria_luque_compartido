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

    findById(id) {
        return this.desserts.find(des => {
            return des.id == id;
        })
    }
}