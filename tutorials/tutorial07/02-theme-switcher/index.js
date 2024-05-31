const container = document.querySelector(".container");
let themeClass = "container";

function defaultTheme() {
    themeClass = "container";
    container.classList = themeClass;
    container.classList.add("")
}

function oceanTheme() {
    themeClass = "container";
    container.classList = themeClass;
    container.classList.add("ocean")
}

function desertTheme() {
    themeClass = "container";
    container.classList = themeClass;
    container.classList.add("desert")
}

function highContrastTheme() {
    themeClass = "container";
    container.classList = themeClass;
    container.classList.add("high-contrast")
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/