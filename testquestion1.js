let bird
let background, birdImg;

function preload(){
    // write code to preload bird.png and background.png
    // refer to assets folder
    birdImg = loadImage("assets/bird.png");
    background = loadImage("assets/background.png");
}

function setup(){
    new Canvas(400, 600);
    // write code to create sprite and load bird image on sprite
    bird = new Sprite();
    bird.img = birdImg;
}

function draw(){
    image(background, 0, 0, width, height);
}

