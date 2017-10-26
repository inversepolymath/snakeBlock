function TailAdd(x, y){
	
	this.x = x;
	this.y = y;
	this.size = 14;
	this.number = floor(random(1, 6));
	
	
	this.draw = function(){
		noStroke();
		fill(255,0,0);
		rect(this.x, this.y, this.size, this.size, 15);		
		fill(255,255,255);
		textSize(10);
		textAlign(CENTER);
		text(this.number, this.x + this.size/2, this.y + this.size/1.4)
		
	}
	
	this.update = function(){
		this.y += gameSpeed;
	}
	
}