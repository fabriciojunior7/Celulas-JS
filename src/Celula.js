function Celula(){
	
	//Atribitos
	this.raioMaior = random(50, 500);
	this.raioMenor = 6;
	this.x = random(this.raioMenor/2, windowWidth-this.raioMenor/2);
	this.y = random(this.raioMenor/2, windowHeight-this.raioMenor/2);
	this.velocidade = 1;
	this.r = random(50, 255);
	this.g = random(50, 255);
	this.b = random(50, 255);

	//Metodos
	this.desenhar = function(){
		//fill(this.r, this.g, this.b, 25);
		//stroke(this.r, this.g, this.b);
		//ellipse(this.x, this.y, this.raioMaior, this.raioMaior);
		fill(this.r, this.g, this.b);
		stroke(0);
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

}