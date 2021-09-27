/*
-----MOUSE EVENTS------
*/

//-----CLICK EVENTS IN IMG PROFILE AND HAMBURGER MENU

let menu = document.getElementById("hamburger");
menu.addEventListener("click", function() {
    let nav = document.getElementById("nav");
    if (nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }

});

let perfil = document.getElementById("btn-perfil");
perfil.addEventListener("click", function() {
    let hd_perfil = document.getElementById("header-perfil");

    if (hd_perfil.style.display == "none") {
        hd_perfil.style.display = "flex";
    } else {
        hd_perfil.style.display = "none";
    }
});

//---- MOUSEOVER AND MOUSEOUT EVENT IN MENU ITEMS

let menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = "#FF9F1C";
        element.style.textShadow = "2px 2px 2px rgba(0,0,0,0.5)";
    })
});

menuItem.forEach(element => {
    element.addEventListener('mouseout', function() {
        element.style.backgroundColor = "#c98749";
        element.style.textShadow = "";
    })
});


/*  ----EVENTOS DE INFORMACIÓN */