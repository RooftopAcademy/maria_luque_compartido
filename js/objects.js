let store = new Store
let catalog = store.getCatalog()
let footer = store.getFooter()

store.fetchDesserts()
renderListDesserts()
addCartListener()
store.fetchNetworks()
renderListNetworks()
renderDessertDetails()
addCartDetailListener()

/** RENDERIZAR LA LISTA DE DESSERTS */
function renderListDesserts() {
    Array.from(document.getElementsByClassName('js-desserts-list'))
        .forEach((list) => {
            list.innerHTML = dessertsList(catalog.showAll())

        })
}


function addCartListener() {
    document.querySelectorAll('.js-add-to-cart')
        .forEach(btn => {
            btn.addEventListener('click', function() {
                btn.style.background="black";
                let dessert = catalog.findById(this.dataset.dessertId)
                console.log(dessert)
                store.getCart().addDessert(dessert)
                
            })

        })
}

/**RENDERIZAR LA LISTA DE REDES  */
function renderListNetworks() {
    Array.from(document.getElementsByClassName('js-social-networks'))
        .forEach((list) => {
            let networks = footer.showAll()
            networks.forEach((network) => {
                list.innerHTML += dessertNetworkView(network)
            })

        })
}
/**RENDERIZAR LA LISTA DE REDES  */

function renderDessertDetails(){
    Array.from(document.getElementsByClassName('js-detail-dessert'))
        .forEach((list)=>{
            list.innerHTML+= dessertDetailView(catalog.showAll()[0])
        })
}

function addCartDetailListener() {
   let btn= document.querySelector('.js-add-cart')
        btn.addEventListener('click', function() {
            console.log(btn)
            let dessert = catalog.findById(this.dataset.dessertId)
            //AGREGAR QUE GUARDE CANTIDAD y agregue dessert con cantidad en shop
            // let quantify=this.
            console.log(dessert)
            store.getCart().addDessert(dessert)
            
        })
}