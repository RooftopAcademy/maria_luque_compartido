import Dessert from "./Dessert";

export default class Catalog{
    desserts: Dessert[] = [];
 

  addDessert(newDessert : Dessert) {
    this.desserts.push(newDessert);
}

  showAll() {
    return this.desserts;
}

//Busca por ID   
findById(id: number) {
    return this.desserts.find( (des: Dessert) => {
        return des.id == id;
    })
  }

//Busca por Categoria
findByCategory(category:string){
        return this.desserts.find( (des:Dessert)=>{
            // console.log(des)
            // console.log(category)
            // console.log(des.category.toUpperCase())
        //    if (des.category.toUpperCase()==category){
               return des.category.toUpperCase()==category
            // return des.category.toUpperCase() === category;
        })
    }
}