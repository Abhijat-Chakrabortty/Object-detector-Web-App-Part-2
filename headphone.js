img = "";
status = "";

function preload() {
    img = loadImage("Headphones.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
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
    image(img, 0, 0, 400, 400);

    fill("red");
    text("headphones", 50, 18);
    noFill();
    stroke("red");
    rect(35, 3,  330, 393);
}