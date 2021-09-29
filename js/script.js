// Elegir algún dato existente en la página, que no sea repetitivo, y guardarlo en una variable.
// A través de JS imprimir el dato en el elemento.

// Guarda elemento id="header-title" en variable element
let element = document.getElementById("header-title");
console.log(element);

//Guarda contenido de elemento en variable contenido
let contenido = "Healthy Desserts";

// Agrega contenido anterior de id="Header-title"
element.innerHTML = contenido;