function dessertItemView(dessert) {
    return `
    <div class="dessert-card" data-dessert-category="${dessert.category} " >
        <img class =" card-img" src="${dessert.image}">
        <div class="card-body">
        <h4 class="titleCard">${dessert.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<a class="js-view-more" href="detail-dessert.html">View more</a></p>
            <div class ="d-flex card-actions">
                <button class=" btn-action-buy js-add-to-cart" data-dessert-id="${dessert.id}"><img src = "img/add_buy_icon.png"> </button>
                <button class=" btn-action-wishes js-add-to-wishes-list"><img src="img/add_like.png" > </button>
                <button class="btn-card-price">$ ${dessert.price} </button>
            </div>
        </div>
    </div>
    `
}