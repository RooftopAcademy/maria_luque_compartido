function searchDessert() {
    const input = document.getElementById('filter').value.toUpperCase();
    // console.log(input);

    const cardDessert = document.getElementById('desserts-list');
    console.log(cardDessert);

    const cards = cardDessert.getElementsByClassName('dessert-card');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h4.titleCard");
        console.log(title);
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display.display = "none";
        }
    }
}