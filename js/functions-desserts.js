let desplegar_menu = function() {
    let nav = document.getElementById("nav");
    if (nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

let desplegar_perfil = function() {
    let perfil = document.getElementById("header-perfil");
    if (perfil.style.display == "none") {
        perfil.style.display = "flex";
    } else {
        perfil.style.display = "none";
    }
}

// let filtrar = function() {


// }