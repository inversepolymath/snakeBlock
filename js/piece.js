function Piece(x, y){
	
	this.x = x;
	this.y = y;
	this.size = 95;
	this.number = floor(random(0, 50));
	
	
	this.draw = function(){
		fill(0);
		textSize(24);
		textAlign(CENTER);
		text(this.number, this.x + this.size/2, this.y + this.size/2)
		noFill();
		rect(this.x, this.y, this.size, this.size, 15);
		
	}
	
	this.update = function(){
		this.y += 3;
	}
	
}