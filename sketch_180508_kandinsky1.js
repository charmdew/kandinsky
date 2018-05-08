var circlesX = [20]; 
var circlesY = [20]; 
var circles = [10];
var Circles = [2];

var xPos=255, yPos=255; 
var speed=20;
var s=1.2;

function setup() {
  createCanvas(549, 556); 
  frameRate(2);

  for (var i=0; i<20; i++) {
    circlesX[i] = i*20+70+ random(70);
    circlesY[i] = height-(i*20+150) +random(70);
  }
}  

function draw() {
  background(0); 

  //draw a big ball
  noStroke();
  fill(255, 200);
  ellipse(xPos, yPos, 27*size, 27*size);
  fill(0, 0, yPos%256, 200);
  ellipse(xPos, yPos, 25*size, 25*size);
  fill(0, 200);
  ellipse(xPos-30, yPos-size*3, 18*size, 18*size);

  if ( keyIsDown(LEFT_ARROW)) {
    xPos-=speed;
  }
  if ( keyIsDown(RIGHT_ARROW)) {
    xPos += speed;
  }
  if (keyIsDown(UP_ARROW)) {
    yPos -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPos += speed;
  }  
  if (keyIsDown(65)){
    size*=s;
  }
  if(keyIsDown(83)){
    size/=s; 
  }
  if(keyIsDown(68)){
    size=10;
  }

  //draw random balls
  for (var i=0; i<20; i=i+2) {
    var r= random(100);
    fill(random(255), random(255), random(255), 200);
    ellipse(circlesX[i], circlesY[i], r, r);
  }
  for (var i=1; i<20; i=i+2) {
    var r= random(50);
    fill(random(255), random(255), random(255), 200);
    ellipse(circlesX[i], circlesY[i], r, r);
  }
  for (var i=0; i<10; i++) {
    circles[i]=random(300, 470);
    var d= random(50);
    fill(random(255), random(255), random(255), 200);
    ellipse(circles[i]+random(50), circles[i]+random(50), d, d);
  }
  for ( var i=0; i<2; i++) {
    Circles[i]= random(50, 100);
    var R= random(50);
    fill(random(255), random(255), random(255), 200);
    ellipse(Circles[i]+random(50), Circles[i]+random(50), R, R);
  }
}

