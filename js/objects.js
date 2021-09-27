let store = new Store
let catalog = store.getCatalog()
let footer = store.getFooter()

store.fetchDesserts()
renderListDesserts()
addCartListener()
store.fetchNetworks()
renderListNetworks()

/** RENDERIZAR LA LISTA DE DESSERTS */
function renderListDesserts() {
    Array.from(document.getElementsByClassName('js-desserts-list'))
        .forEach((list) => {
            list.innerHTML = dessertsList(catalog.showAll())

        })
}

function addCartListener() {
    document.querySelectorAll('js-add-to-cart')
        .forEach(btn => {
            btn.addEventListener('click', function() {

                let dessert = catalog.findById(this.dataset.dessertId)
                store.getCart().addDessert(dessert)
            })

        });
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