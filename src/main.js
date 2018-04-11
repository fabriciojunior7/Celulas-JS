var tela;
var numcelulas = 1;
var celulas = [];
var segundos = 0.5;
var limite = 100;

function setup(){
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
				stroke(0, 255, 0);
				line(celulas[i].x, celulas[i].y, celulas[j].x, celulas[j].y);
			}
		}
		celulas[i].desenhar();
	}

	if(frameCount % (60*segundos) == 0 && celulas.length < limite){
		criar();
	}

	texto();
}

function windowResized(){
	tela = createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
	celulas.push(new Celula());
	celulas[celulas.length-1].x = mouseX;
	celulas[celulas.length-1].y = mouseY;
}

function texto(){
	//Contador
	noStroke();
	fill(255);
	textSize(30);
	text(celulas.length, 8, 35);
	//Logo
	textSize(12);
	text("Fabricio Junior", 8, windowHeight-8);
}

function criar(){
	celulas.push(new Celula());
	if(celulas.length > 100){
		//location.reload();
	}
}