var jungle;
var enemies = [];
var groundLevel = 500;
var player = {
  x: 30,
  y: 482,
  startedJumping : false,
  display: function() {
    // head
    fill(255,227,159)
    rect(this.x, this.y, 55, 55);
    // body
    fill(17,0,255)
    rect(this.x+12, this.y+55, 30, 50);
    // eyes
    fill(0,0,0)
    rect(this.x+10, this.y+20, 10, 10);
    rect(this.x+35, this.y+20, 10, 10);
    // hair
    fill(139,69,19)
    rect(this.x, this.y, 55, 10);
    // arms
    fill(0,17,255);
    rect(this.x+2, this.y+65, 10, 20)
    rect(this.x+42, this.y+65, 10, 20)
    // hands
    fill(255,227, 159)
    rect(this.x+2, this.y+80, 10, 10)
    rect(this.x+42, this.y+80, 10, 10)
    // legs
    fill(0,255,77)
    rect(this.x+12, this.y+104, 12, 20)
    rect(this.x+30, this.y+104, 12, 20)
  }
}

function preload(){

}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);

  jungle = loadImage("Jungle Forest.jpg");
  for(var i = 0; i < 5; i++){
    enemies[i] = new Enemy(i * 100)

  }
  player.velocity = createVector(0, 0);
  player.gravity = createVector(0, 0.3);
  player.startJump = function() {
    if (this.startedJumping == false) {
      this.y = groundLevel - 1;
      this.velocity = createVector(0, -10);
      this.startedJumping = true;
    }
  }
  player.jump = function()  {
    if (this.y < groundLevel) {
      this.velocity.add(this.gravity);
    }
    else {
      this.velocity = createVector(0, 0);
      this.startedJumping = false;
    }
    this.x += player.velocity.x;
    this.y += player.velocity.y;

  }
}


function draw() {

  background(jungle);
  player.display();
  player.jump();
  for(var i = 0; i < enemies.length; i++) {
  enemies[i].display();
  enemies[i].move()
}
}

function keyPressed() {

  if (keyCode == UP_ARROW) {
    player.startJump();
  }

  else if (keyCode == RIGHT_ARROW) {
    player.x+=10

  }
  else if (keyCode == DOWN_ARROW) {
    player.y+=10
  }
  else if (keyCode == LEFT_ARROW) {
    player.x-=10
  }

  if (player.y > height) {

  }

  else if ( player.y < 0) {

  }

  if (player.x > width - 30) {

  }
}

function Enemy(x){
  this.xOrig = x;
  this.x = x;
  this.y = 370;
  this.move = function(){
    this.x = 100*sin(millis()/1000) + this.xOrig;
  }
  this.display = function(){
    fill(0)
    rect(this.x,this.y+165,30,30)

    fill(255,0,0)
    rect(this.x + 3, this.y + 170,10,10)
    rect(this.x + 17, this.y + 170, 10, 10)
  }
}
