function modifyQuantity(value) {
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

function showSpan(element) {
    // primero busca el padre de btn y luego retorna el hijo span
    let span =element.parentElement.querySelector(".js-quantify");
    return span
}

//--DECREASE QUANTIFY 
let container=document.getElementsByClassName("js-detail-dessert")
console.log(container)
let btnLeft = Array.from(container.getElementsByClassName("js-arrowLeft"));
console.log( btnLeft)
btnLeft.forEach((element) => {
        element.addEventListener("click", function() {
        let span = showSpan(element)
        let value=parseInt(span.innerHTML);
        if(value==1){
           element.previousElementSibling.classList.toggle('d-none')
           setTimeout(()=>{
            element.previousElementSibling.classList.toggle('d-none')
           },1500)
        } else {
            span.innerHTML = modifyQuantity(value).decrease()
        }
    })
})

let btnRight = Array.from(document.getElementsByClassName("js-arrowRight"));
//--INCREASE QUANTIFY 
btnRight.forEach((element) => {
        element.addEventListener("click", function() {
        let span = showSpan(element)
        let value=parseInt(span.innerHTML);
        span.innerHTML = modifyQuantity(value).increase()
        
    })
       
})
