
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(600, 600);
    canvas.position(550, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    textSize(difference);
    fill("8A2CEC");
    stroke("#FFFFFF");
    text('Krish', 250, 320);
}

function modelLoaded()
{
    console.log("PoseNet is Initialisated");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
       leftwristX = results[0].pose.leftWrist.x;
       rightwristX = results[0].pose.rightWrist.x;

        difference = (leftwristX-rightwristX).toFixed(0);
    }
}
