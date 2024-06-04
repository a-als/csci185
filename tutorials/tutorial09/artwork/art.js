const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
    // min and max included
    return Math.random() * (max - min + 1) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second

    noStroke();
    let c = [0, 126, 255, 35];
    fill(c);
    // fill("#08415c");

    // generate a random x-position, y-position, and size:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomInt(25, 125);

    // Draw a random circle:
    circle(x, y, size);
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
const shapes = [drawCircle, drawSquare, drawTriangle];

function drawCircle(x, y, size) {
    circle(x, y, size);
}

function drawSquare(x, y, size) {
    square(x, y, size);
}
function drawTriangle(x, y, size) {
    triangle(
        x,
        y - size / 2,
        x - size / 2.25,
        y + size / 4.3,
        x + size / 2.25,
        y + size / 4.3
    );
}

function draw() {
    clear();
    for (let i = 0; i < 400; i++) {
        // generate a random x-position, y-position, and size:
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomFloat(25, 125);

        let red = randomInt(0, 255);
        let green = randomInt(0, 255);
        let blue = randomInt(0, 255);
        let c = [red, green, blue, 35];
        fill(c);

        // draw a random circle each time the program animates:
        shapes[randomInt(0, shapes.length - 1)](x, y, size);
        // circle(x, y, size);
    }

}
