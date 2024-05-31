const content = document.querySelector("p")
const h1 = document.querySelector("h1")

function makeBigger() {
   content.style.fontSize = "140%";
   h1.style.transform = "scale(2)";
};

function makeSmaller() {
   content.style.fontSize = "100%";
   h1.style.transform = "scale(1)";
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
