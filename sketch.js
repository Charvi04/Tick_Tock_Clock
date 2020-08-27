var men,menImg;

function preload(){
  menImg = loadImage("Images/men.png");
}

function setup() {
  createCanvas(800,550);
  

  angleMode(DEGREES);
  men = createSprite(25, 350);
  men.addImage(menImg);
}

function draw() {
  background(0);

  
  textSize(30);
  textStyle("bold");
  textFont("Times New Roman");
  fill("yellow")
  text("Tick-Tock Clock", 100,400); 
  fill(rgb(0, 252, 231))
  text("Thank you so much!!",420,250);
  fill(255);
  text("Now, we can open the lock ",400,300)
text("when the clock shows 12:00",400,350);

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("magenta");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("green");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("magenta");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);


  drawSprites();
}