/*
-----MOUSE EVENTS------
*/

//-----CLICK EVENTS IN IMG PROFILE AND HAMBURGER MENU

// let menu = document.getElementById("hamburger");
// menu.addEventListener("click", function() {
//     let nav = document.getElementById("nav");
//     nav.classList.toggle('d-none');
//     nav.classList.toggle('d-flex');
// });
let menu = document.getElementById("hamburger");
menu.addEventListener("click", function() {
    let main=document.getElementById("main");
    let aside = document.getElementById("aside");
    if(main.classList.contains('row-center')) {
        main.setAttribute('class','col-center');
        aside.setAttribute('class','d-flex col-center')
    }
    aside.classList.toggle('d-none')
    
});

let perfil = document.getElementById("btn-perfil");
perfil.addEventListener("click", function() {
    let hd_perfil = document.getElementById("header-perfil");
    hd_perfil.classList.toggle('d-none');
    hd_perfil.classList.toggle('d-flex');
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
