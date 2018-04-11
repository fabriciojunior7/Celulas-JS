function Celula(){
	
	//Atribitos
	this.constate = 2100;
	this.constateMenor = 20000;
	this.areaBase = windowWidth*windowHeight;
	//this.windowWidthBase = windowWidth;
	//this.windowHeightBase = windowHeight;
	this.raioMaior = random((area/this.constateMenor), (area/this.constate));
	this.raioMenor = 6;
	this.x = random(this.raioMenor/2, windowWidth-this.raioMenor/2);
	this.y = random(this.raioMenor/2, windowHeight-this.raioMenor/2);
	this.velocidade = 1;
	this.r = random(50, 255);
	this.g = random(50, 255);
	this.b = random(50, 255);

	//Metodos
	this.desenhar = function(debug){
		if(debug){
			fill(this.r, this.g, this.b, 20);
			noStroke();
			ellipse(this.x, this.y, this.raioMaior, this.raioMaior);
		}
		fill(this.r, this.g, this.b);
		strokeWeight(1);
		stroke(255);
		ellipse(this.x, this.y, this.raioMenor, this.raioMenor);
	}

	this.vibrar = function(){
		if(this.x < this.raioMenor/2){
			this.x += this.velocidade;
		}
		else if(this.x > windowWidth-this.raioMenor/2){
			this.x -= this.velocidade;
		}
		else{
			this.x += random(-this.velocidade, this.velocidade);
		}

		if(this.y < this.raioMenor/2){
			this.y += this.velocidade;
		}
		else if(this.y > windowHeight-this.raioMenor/2){
			this.y -= this.velocidade;
		}
		else{
			this.y += random(-this.velocidade, this.velocidade);
		}
	}

	this.atualizarArea = function(area){
		var proporcaoRaio = area/this.areaBase;
		this.raioMaior *= proporcaoRaio;
		this.areaBase = area;

		//var proporcaoX = windowWidth/this.windowWidthBase;
		this.x *= proporcaoRaio;
		//this.windowWidthBase = windowWidth;

		//var proporcaoY = windowHeight/this.windowHeightBase;
		this.y *= proporcaoRaio;
		//this.windowHeightBase = windowHeight;
	}

}