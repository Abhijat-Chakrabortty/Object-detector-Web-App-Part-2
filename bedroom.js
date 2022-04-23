img = "";
status = "";

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
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
    image(img, 0, 0, 640, 420);

    fill("red");
    text("bed", 215, 165);
    noFill();
    stroke("red");
    rect(205, 150,  235, 175)

    fill("red");
    text("chandelier", 290, 75);
    noFill();
    stroke("red");
    rect(285, 60,  70, 80)

    fill("red");
    text("curtain", 67, 70);
    noFill();
    stroke("red");
    rect(62, 60,  50, 250)

    fill("red");
    text("lamp", 422, 165);
    noFill();
    stroke("red");
    rect(407, 150, 50, 58)
}