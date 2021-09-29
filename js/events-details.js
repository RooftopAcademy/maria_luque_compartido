function modifyCant(value) {
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
    let span = Array.from(element.parentElement.getElementsByClassName("js-cant"))
    return span
}

//--INCREASE CANT

let btnLeft = Array.from(document.getElementsByClassName("js-arrowLeft"))
console.log(btnLeft)

btnLeft.forEach((element) => {
        // element.addEventListener("click", function() {
        // let span = Array.from(element.parentElement.getElementsByClassName("js-cant"))
        // console.log(span)

        let span = showSpan(element)

        span.map(function(e) {
            let value = parseInt(e.innerHTML);
            span.innerHTML = modifyCant(value).increase()
            return console.log(span.innerHTML)
        })

    })
    // })

//---DECREASE CANT
let btnRight = Array.from(document.getElementsByClassName("js-arrowLeft"))
console.log(btnRight)

btnRight.forEach((element) => {
        // element.addEventListener("click", function() {
        // let span = Array.from(element.parentElement.getElementsByClassName("js-cant"))
        // console.log(span)
        let span = showSpan(element)

        span.map(function(e) {
            let value = parseInt(e.innerHTML);
            span.innerHTML = modifyCant(value).decrease()
            return console.log(span.innerHTML)
        })

    })
    // })