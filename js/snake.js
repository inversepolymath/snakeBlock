function Snake(){
	this.x = canvasWidth / 2;
	this.y = canvasHeight * 0.7;
	this.xmove = 0;
	this.size = 20;
	this.tail = 20;
	this.history = [];
	
	this.draw = function(){
		noFill();
		stroke(0);
		ellipse(this.x, this.y, this.size);
		fill(0);
		textSize(10);
		textAlign(CENTER);
		noStroke();
		text(this.tail, this.x, this.y+4)
		fill(0);
		stroke(0);
		for(var i = 0; i < this.tail; i++){
			var xPosition = this.history[this.history.length-i-2];
			if(xPosition > canvasWidth){
				xPosition = canvasWidth - this.size/2 - 1;
			}else if(xPosition < 0){
				xPosition = 0 + this.size/2 + 1;
			}
			ellipse(xPosition, this.y+(i*(this.size+3))+this.size+3, this.size);
		}
	}
	
	this.update = function(){
		this.x = mouseX;
		if(this.x > canvasWidth-this.size/2){
			this.x = canvasWidth-this.size/2-1;
		}
		if(this.x < 0+this.size/2){
			this.x = 0+this.size/2+1;
		}
		for(var i = pieces.length-1; i >= 0; i--){
			if((this.y > pieces[i].y) && (this.y < pieces[i].y+pieces[i].size)){
				if((this.x < pieces[i].x+pieces[i].size) && (this.x > pieces[i].x+this.size)){
					d1 = dist(pieces[i].x, pieces[i].y + pieces[i].size / 2, this.x, this.y);
					d2 = dist(pieces[i].x + pieces[i].size, pieces[i].y + pieces[i].size / 2, this.x, this.y);
					console.log(d1 + " - " + d2);
					if(d1 < d2){
						this.x = pieces[i].x - this.size / 2 - 3;
					} else if(d2 < d1){
						this.x = pieces[i].x + pieces[i].size + this.size / 2 + 3;
					}
				}
			}
			
			// var distance = dist((pieces[i].x + 10), (pieces[i].y + pieces[i].size), mouseX, this.y);
			// rect(pieces[i].x, pieces[i].y, 10, pieces[i].size);
			// if(abs(distance) <= 50){
				// this.x = pieces[i].x - this.size / 2 - 5
			// }
		}
		this.history.push(this.x);
	}
	
	
}