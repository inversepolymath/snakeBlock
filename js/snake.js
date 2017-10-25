function Snake(){
	this.x = canvasWidth / 2;
	this.y = canvasHeight * 0.7;
	this.xmove = 0;
	this.size = 20;
	this.tail = 5;
	
	this.draw = function(){
		ellipse(this.x, this.y, this.size);
	}
	
	this.update = function(){
		this.x = mouseX;
		if(this.x > canvasWidth-this.size/2){
			this.x = canvasWidth-this.size/2-1;
		}
		if(this.x < 0+this.size/2){
			this.x = 0+this.size/2+1;
		}
	}
	
	
}