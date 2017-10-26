var canvasWidth = 500;
var canvasHeight = 800;
var score = 0;
var gameSpeed = 3;
var frameCounter = 0;
var snake;
var pieces = [];
var tailAdd = [];
var mouseHistory = [];

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  noCursor();
  snake = new Snake();
  pieces.push(new Piece(0, 0));
} 

function draw() {
  mouseHistory.push(mouseX);
  frameCounter++;
  gameSpeed = 3;
  background(220);
  snake.update();
  snake.draw();

  for(var i = pieces.length-1; i >= 0; i--){
	  if(dist(pieces[i].x + pieces[i].size/2, pieces[i].y + pieces[i].size/2, snake.x, snake.y) <= 60){
		  gameSpeed = 0;
		  frameCounter--;
		  pieces[i].number -= 1;
		  snake.tail--;
		  score++;
		  if(pieces[i].number <= 0){
			pieces.splice(i, 1);
		  }
	  }
  }
  for(var i = pieces.length-1; i >= 0; i--){
	  // fill(255,0,0)
	  // rect(pieces[i].x + pieces[i].size/2 - 5, pieces[i].y + pieces[i].size/2 - 5, 10,10);
	  pieces[i].update();
	  pieces[i].draw();
	  if(pieces[i].y > canvasHeight){
		  pieces.splice(i, 1)
	  }
  }
  
  for(var i = tailAdd.length-1; i >= 0; i--){
	  if(dist(tailAdd[i].x + tailAdd[i].size/2, tailAdd[i].y + tailAdd[i].size/2, snake.x, snake.y) <= 20){
		snake.tail += tailAdd[i].number;
		tailAdd.splice(i, 1);
	  }
  }  
  for(var i = tailAdd.length-1; i >= 0; i--){
	  tailAdd[i].update();
	  tailAdd[i].draw();
	  if(tailAdd[i].y > canvasHeight){
		  tailAdd.splice(i, 1)
	  }
  }
  
  if((frameCounter % 60) == 0){
	if((frameCounter % 360) == 0){
		// pieces.push(new Piece(0, -100));
		// pieces.push(new Piece(100, -100));
		// pieces.push(new Piece(200, -100));
		// pieces.push(new Piece(300, -100));
		// pieces.push(new Piece(400, -100));
	}else{
		var randomX = floor(random(0, 5)) * 100;
		pieces.push(new Piece(randomX, -100));
		randomX = floor(random(randomX, 5)) * 100;
		tailAdd.push(new TailAdd(randomX, -100));	
	}
  }
  textSize(24);
  noStroke();
  fill(255);
  text("Score: " + score, canvasWidth-100, 25);
  if(mouseHistory.length > 1000){
	mouseHistory.splice(0, mouseHistory.length-1000); 
  }
}


function keyPressed() {
	if(keyCode == 65){
		snake.xmove = -2;
	}
	if(keyCode == 68){
		snake.xmove = 2;
	}
}

function keyReleased() {
	if(keyCode == 65){
		snake.xmove = 0;
	}
	if(keyCode == 68){
		snake.xmove = 0;
	}
}