var canvasWidth = 500;
var canvasHeight = 800;
var snake;
var pieces = [];

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');
  snake = new Snake();
  pieces.push(new Piece(0, 0));
} 

function draw() {
  background(220);
  snake.update();
  snake.draw();
  for(var i = pieces.length-1; i >= 0; i--){
	  pieces[i].update();
	  pieces[i].draw();
	  if(pieces[i].y > canvasHeight){
		  pieces.splice(i, 1)
	  }
  }
  
  if((frameCount % 60) == 0){
	if((frameCount % 360) == 0){
		pieces.push(new Piece(0, -100));
		pieces.push(new Piece(100, -100));
		pieces.push(new Piece(200, -100));
	}else{
		var randomX = floor(random(0, 5)) * 100;
		pieces.push(new Piece(randomX, -100));		
	}
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