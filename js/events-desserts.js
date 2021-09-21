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
    // let imagen = this.getElementsByTagName("img");
    // imagen.setAttribute("src", "img/login-blanco.jpg");
    let hd_perfil = document.getElementById("header-perfil");

    if (hd_perfil.style.display == "none") {
        hd_perfil.style.display = "flex";
    } else {
        hd_perfil.style.display = "none";
    }
});