function preload(){

}

function setup() {
    canv = createCanvas(1000, 800)
    canv.position(380, 270)
    capture = createCapture(VIDEO)
    capture.hide()

    tint_colour = ""
}

function draw() {
    image(capture, 0, 0, 1000, 800)
    tint(tint_colour)
}

function applyFilter() {
    tint_colour = document.getElementById("colour").value;
}

function take_snapshot() {
    save("photo.png");
}