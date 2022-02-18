noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('mustache3142634565426.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX - 50, noseY - 30, 100, 100);
}

function take_snapshot() {
    save('myPhoto.png');
}

function modelLoaded() {
    console.log('PoseNet Is Working; Everything up until now should work and if successful everything after this should too...');
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}