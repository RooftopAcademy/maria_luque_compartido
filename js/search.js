function searchDessert() {
    const input = document.getElementById('filter').value.toUpperCase();

    const cardDessert = document.getElementById('desserts-list');

    const cards = cardDessert.getElementsByClassName('dessert-card');
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h4.titleCard");
        // console.log(title);
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
            console.log(cards[i])
        } else {
            cards[i].style.display = "none";
        }
    }
}