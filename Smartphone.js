img = "";
status = "";

function preload() {
    img = loadImage("Smartphone.jpg");
}

function setup() {
    canvas = createCanvas(640, 384);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 384);

    fill("red");
    text("ring", 250, 180);
    noFill();
    stroke("red");
    rect(240, 170, 40, 20);

    fill("red");
    text("Smartphone", 285, 110);
    noFill();
    stroke("red");
    rect(270, 95, 125, 175);
}