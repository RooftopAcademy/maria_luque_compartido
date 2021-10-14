
//-----DETAILS DESSERT EVENTS-----
export default function modifyQuantity(value:number) {
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

export function showSpan(element : HTMLElement) {
    // primero busca el padre de btn y luego retorna el hijo span
    let span =element.parentElement.querySelector(".js-quantify");
    return span
}

//--DECREASE QUANTIFY 

let btnLeft:Element[] = Array.from(document.getElementsByClassName("js-arrowLeft"));

// btnLeft.forEach((element:Element) => {
//         element.addEventListener("click", function() {
//         let span:Element= showSpan(element);
//         let value=parseInt(span.innerHTML);
//         if(value==1){
//            element.previousElementSibling.classList.toggle('d-none')
//            setTimeout(()=>{
//             element.previousElementSibling.classList.toggle('d-none')
//            },1500)
//         } else {
//             span.innerHTML = modifyQuantity(value).decrease()
//         }
//     })
// })

// let btnRight:Element[] = Array.from(document.getElementsByClassName("js-arrowRight"));

// btnRight.forEach((element:Element) => {
//         element.addEventListener("click", function() {
//         let span = showSpan(element)
//         let value=parseInt(span.innerHTML);
//         span.innerHTML = modifyQuantity(value).increase()
        
//     })
       
// })


//-----DESSERTS EVENTS-----
let menu:HTMLElement = document.getElementById("hamburger");

menu.addEventListener("click", function() {
    let main: HTMLElement=document.getElementById("main");
    let aside: HTMLElement= document.getElementById("aside");
    if(main.classList.contains('row-center')) {
        main.setAttribute('class','col-center');
        aside.setAttribute('class','d-flex col-center')
    }
    aside.classList.toggle('d-none')
    
});

let perfil:HTMLElement = document.getElementById("btn-perfil");

perfil.addEventListener("click", function() {
    let hd_perfil :HTMLElement = document.getElementById("header-perfil");
    hd_perfil.classList.toggle('d-none');
    hd_perfil.classList.toggle('d-flex');
});

//---- MOUSEOVER AND MOUSEOUT EVENT IN MENU ITEMS

// let menuItem = document.querySelectorAll(".menu-item");

// menuItem.forEach(element => {
//     element.addEventListener('mouseover', function() {
//         element.style.backgroundColor = "#FF9F1C";
//         element.style.textShadow = "2px 2px 2px rgba(0,0,0,0.5)";
//     })
// });