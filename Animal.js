img = "";
status = "";

function preload() {
    img = loadImage("Animal.jpg");
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
    text("cat", 105, 207);
    noFill();
    stroke("red");
    rect(90, 192,  170, 185);

    fill("red");
    text("dog", 265, 60);
    noFill();
    stroke("red");
    rect(250, 45, 325, 330);
}