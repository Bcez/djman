function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

// Sound System //

song = "";

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
}

// Drawing System //

function draw(){
    image(video, 0, 0, 600, 500);
}
