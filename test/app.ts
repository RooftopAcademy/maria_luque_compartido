
import Catalog from "./Catalog"
import Store from "./Store"
import Footer from "./Footer"
import dessertsList from "./views/dessertsList"

let store :Store = new Store;
let catalog :Catalog = store.getCatalog();
let footer :Footer = store.getFooter();

store.fetchDesserts()
renderListDesserts()
addCartListener()
store.fetchNetworks()
renderListNetworks()
renderDessertDetails()
addCartDetailListener()


/** RENDERIZAR LA LISTA DE DESSERTS */
export default function renderListDesserts() {
    Array.from(document.getElementsByClassName('js-desserts-list'))
        .forEach((list :Element) => {
         return   list.innerHTML += dessertsList(catalog.showAll())

        })
}