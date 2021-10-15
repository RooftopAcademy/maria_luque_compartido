
let store = new Store
let catalog = store.getCatalog()
let footer = store.getFooter()

store.fetchDesserts()
renderListDesserts()
addCartListener()
addWishListener()
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
                btn.firstElementChild.setAttribute('src','img/buy_icon.png')
                //modifica cantidad del contador
                increaseShop()
                // //Agrega dessert al carrito
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

/**RENDERIZAR DETAILS-DESSERT  */

function renderDessertDetails(){
    Array.from(document.getElementsByClassName('js-detail-dessert'))
        .forEach((list)=>{
            list.innerHTML+= dessertDetailView(catalog.showAll()[0])
        })
}

/**EVENTO BOTON WISHES */
function addWishListener(){
    document.querySelectorAll('.js-add-to-wishes-list')
        .forEach(btn => {
           
            btn.addEventListener('click', function() {
                btn.firstElementChild.setAttribute('src','img/like.png')
                //modifica cantidad del contador
                increaseWish()
                // //Agrega dessert a la lista de deseos
                // let dessert = catalog.findById(this.dataset.dessertId)
                // console.log(dessert)
                // store.getCart().addDessert(dessert)
                
            })

        })
    }
//-------------------------------------------------
/**DETAIL DESSERT EVENTS*/
//-------------------------------------------------


function addCartDetailListener() {
   let btn= document.querySelector('.js-add-cart')
        btn.addEventListener('click', function() {
            // console.log(btn)
            let dessert = catalog.findById(this.dataset.dessertId)
            //AGREGAR QUE GUARDE CANTIDAD y agregue dessert con cantidad en shop
            const unity=document.querySelector(".unity-qty").innerHTML
           for(let i=0;i<unity;i++ ){
            increaseShop() 
           }
            console.log(dessert)
            store.getCart().addDessert(dessert)
            
        })
}

function modifyQuantity(value) {
    function increase() {
        value += 1;
        return value
    }

    function decrease() {
        if (value > 0) {
            value -= 1;
            return value
        } else {
            return value
        }
    }
    return {
        increase,
        decrease
    }

}

function increaseShop(){
    let quantity= document.getElementById('shop')
    let value=parseInt(quantity.innerHTML)
    quantity.innerHTML=modifyQuantity(value).increase()
}
function increaseWish(){
    let quantity= document.getElementById('wishes-list')
    let value=parseInt(quantity.innerHTML)
    quantity.innerHTML=modifyQuantity(value).increase()
}
function showSpan(element) {
    // primero busca el padre de btn y luego retorna el hijo span
    let span =element.parentElement.querySelector(".js-quantify");
    return span
}

//--DECREASE QUANTIFY 
let btnLeft = Array.from(document.getElementsByClassName("js-arrowLeft"));
btnLeft.forEach((element) => {
        element.addEventListener("click", function() {
        let span = showSpan(element)
        let value=parseInt(span.innerHTML);
        if(value==1){
           element.previousElementSibling.classList.toggle('d-none')
           setTimeout(()=>{
            element.previousElementSibling.classList.toggle('d-none')
           },1500)
        } else {
            span.innerHTML = modifyQuantity(value).decrease()
        }
    })
})

let btnRight = Array.from(document.getElementsByClassName("js-arrowRight"));
//--INCREASE QUANTIFY 
btnRight.forEach((element) => {
        element.addEventListener("click", function() {
        let span = showSpan(element)
        let value=parseInt(span.innerHTML);
        span.innerHTML = modifyQuantity(value).increase()
        
    })
       
})

//EVENTOS PARA VISUALIZAR IMAGENES
