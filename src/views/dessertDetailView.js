function dessertDetailView(dessert) {
    return `

<div class=" images d-flex col-center">
            <div class="imageBig">
                <img id="js-imageBig" src="${dessert.image}">
            </div>
            <div class=" imageSmall d-flex row-center">
                <img class="js-imageSmall" src="img/img-desserts/bizcocho.jpg">
                <img class="js-imageSmall" src="img/img-desserts/bizcocho.jpg">
                <img class="js-imageSmall" src="img/img-desserts/bizcocho.jpg">
                <img class="js-imageSmall" src="img/img-desserts/bizcocho.jpg">
                <img class="js-imageSmall" src="img/img-desserts/bizcocho.jpg">
            </div>
        </div>
        <div class="details d-flex col-center">
            <h3 class="title"> ${dessert.name} Cake</h3>
            <div class= container-detail>
                <div class=" price d-flex row-center">
                    <p class="quantify-title" >PRICE :</p>
                    <div class="quantify-title"> $ ${dessert.price}</div>
                </div>
                <div class=" portions">
                    <span class="d-none message"> Minimun Portions possible</span>
                    <button type=" button" class="js-arrowLeft "><i class="fas fa-arrow-circle-left "></i></button>
                    <span class="quantify js-quantify "> 1</span>
                    <button type="button " class="js-arrowRight "> <i class="fas fa-arrow-circle-right "></i></button>
                    <span class="quantify-title">Portions</span>
                </div>
    
                <div class="unity">
                    <span class="d-none message"> Minimun Unity possible</span>
                    <button type="button " class="js-arrowLeft "> <i class="fas fa-arrow-circle-left "></i></button>
                    <span class="quantify js-quantify "> 1</span>
                    <button type="button " class="js-arrowRight "> <i class="fas fa-arrow-circle-right "></i></button>
                    <span class="quantify-title">Unities</span>
                </div>
                <div class="stock">
                    <span class="quantify js-quantify "> 0</span>
                    <span class="quantify-title">Stock</span>
                </div>
                <div>
                    <button type="submit" class="btn-submit-buy js-add-cart" data-dessert-id=${dessert.id} title="">Add to Cart</button> 
                </div>
            </div>
            

            <div class="container-description">
                <p class="quantify-title">DESCRIPTION</p>
                <ul class="quantify-title">
                    <li>${dessert.description[0]}</li>
                    <li>${dessert.description[1]}</li>
                </ul>
            </div>
            <div>
                <span> Contact Us</span>
                <div class="js-social-networks ">

                </div>
            </div>

        </div>
        `
    }