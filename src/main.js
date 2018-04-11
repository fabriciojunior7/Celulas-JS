var tela;
var numcelulas = 1;
var celulas = [];
var segundos = 1;
var debug = false;

var limite = 100;
var area = 0;
var costante = 5245;

function setup(){
	atualizarArea();
	tela = createCanvas(windowWidth, windowHeight);
	frameRate(60);
	for(var i=0; i<numcelulas; i++){
		celulas.push(new Celula());
	}
}

function draw(){
	background(0);

	for(var i=0; i<celulas.length; i++){
		celulas[i].vibrar();
		for(var j=i+1; j<celulas.length; j++){
			hit1 = collideRectCircle(celulas[i].x-3, celulas[i].y-3, 6, 6, celulas[j].x, celulas[j].y, celulas[j].raioMaior, celulas[j].raioMaior);
			hit2 = collideRectCircle(celulas[j].x-3, celulas[j].y-3, 6, 6, celulas[i].x, celulas[i].y, celulas[i].raioMaior, celulas[i].raioMaior);
			if(hit1 || hit2){
				//stroke(0, 255, 0, 50);
				if(hit2){
					stroke(celulas[i].r, celulas[i].g, celulas[i].b, 100);
				}
				else if(hit1){
					stroke(celulas[j].r, celulas[j].g, celulas[j].b, 100);
				}
				strokeWeight(1);
				line(celulas[i].x, celulas[i].y, celulas[j].x, celulas[j].y);
			}
		}
		celulas[i].desenhar(debug);
	}

	if(frameCount % (60*segundos) == 0 && celulas.length < limite){
		criar();
	}

	texto();
}

function windowResized(){
	tela = createCanvas(windowWidth, windowHeight);
	atualizarArea();
}

function mousePressed(){
	if(mouseButton == LEFT){
		celulas.push(new Celula());
		celulas[celulas.length-1].x = mouseX;
		celulas[celulas.length-1].y = mouseY;
	}
	else if(mouseButton == CENTER){
		for(var i=0; i<celulas.length; i++){
			hit = collidePointCircle(mouseX, mouseY, celulas[i].x, celulas[i].y, celulas[i].raioMenor+5);
			if(hit){
				celulas.splice(i, 1);
				break;
			}
		}
	}
}

function keyPressed(){
	if((keyCode == 192 || keyCode == 32 || keyCode == 13) && debug){
		debug = false;
	}
	else if((keyCode == 192 || keyCode == 32 || keyCode == 13) && !debug){
		debug = true;
	}
}

function texto(){
	//Contador
	noStroke();
	fill(255);
	textSize(30);
	text(celulas.length, 8, 35);
	if(debug){
		fill(100);
		text(limite, 8, 65);
	}
	//Logo
	fill(255);
	textSize(12);
	text("Fabricio Junior", 8, windowHeight-8);
}

function criar(){
	celulas.push(new Celula());
	if(celulas.length > limite){
		//location.reload();
	}
}

function atualizarArea(){
	area = windowWidth * windowHeight;
	limite = round(area/costante);
	print(limite);
	for(var i=0; i<celulas.length; i++){
		celulas[i].atualizarArea(area);
	}
}