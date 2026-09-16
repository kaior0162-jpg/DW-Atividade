var canvas = document.getElementById("jogo")
var contexto = canvas.getContext("2d")

const circulo ={
    x : 250,
    y : 250,
    r : 40,
    cor : "blue",
    velocidade : 3

};

const keys = {}
window.addEventListener('keydown' , e => keys[e.key] = true);
window.addEventListener('keyup' , e => keys[e.key] = false);

function desenhar(){
    contexto.clearRect(0,0, canvas.width, canvas.height);
    contexto.beginPath();
    contexto.arc(circulo.x, circulo.y, circulo.r, 0, Math.PI*2);
    contexto.fillStyle = circulo.cor;
    contexto.fill();
    contexto.closePath();
}

function animar(){
    if(keys['ArrowLeft']) circulo.x-= circulo.velocidade;
    if(keys['ArrowRight']) circulo.x+= circulo.velocidade;
    if(keys['ArrowUp']) circulo.y-= circulo.velocidade;
    if(keys['ArrowDown']) circulo.y+= circulo.velocidade;

    if(keys['v']) circulo.cor = "red";
    if(keys['a']) circulo.cor = "blue";
    if(keys['g']) circulo.cor = "green";
    if(keys['p']) circulo.cor = "black";

    if(keys['1']) circulo.r-=2 ;
    if(keys['2']) circulo.r+=2;

    desenhar();
}
function loop(){
    animar();
    requestAnimationFrame(loop);
}

loop()
