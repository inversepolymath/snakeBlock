function Piece(x, y){
	this.color = {0: "00FF00", 5: "32FF00", 10: "65FF00", 15: "98FF00", 20: "CBFF00", 25: "FEFF00", 30: "FFCC00", 35: "FF9900", 40: "FF6600", 45: "FF3300", 50: "FF0000"};
	this.x = x;
	this.y = y;
	this.size = 95;
	this.number = floor(random(1, 51));
	
	
	this.draw = function(){
		stroke(0);
		var num5 = ceil(this.number/5)*5;
		fill(color("#" + this.color[num5]));
		rect(this.x, this.y, this.size, this.size, 15);
		fill(255);
		noStroke();
		textSize(24);
		textAlign(CENTER);
		text(this.number, this.x + this.size/2, this.y + this.size/1.7);
	}
	
	this.update = function(){
		this.y += gameSpeed;
	}
	
}