function responsivefunction(res) {
    if (res.matches) { // If var res matches with the condition.
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "HoneyDew";
    }
}

var res = window.matchMedia("(max-width: 600px)")
responsivefunction(res)
res.addListener(responsivefunction)
