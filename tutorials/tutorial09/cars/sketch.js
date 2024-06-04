const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const initialC1X = -5;
const initialC2X = canvasWidth + 5;

const c1 = {
    x: initialC1X,
    y: 200,
    width: 400,
    speed: 4,
    color: '#A8E79E'
};

const c2 = {
    x: initialC2X,
    y: canvasHeight - 200,
    width: 400,
    speed: -8,
    color: '#D45BBF'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (c1.x > (canvasWidth + c1.width)) {
        c1.x = initialC1X;
    } else {
        c1.x += c1.speed;
    }

    if (c2.x < (0 - c2.width)) {
        c2.x = initialC2X;
    } else {
        c2.x += c2.speed;
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
