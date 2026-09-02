var canvas = document.getElementById("jogo");
var contexto = canvas.getContext("2d");

const bola ={
    x : 200,
    y : 200,
    r : 50,
    cor : "red",
    velocidade : 3
};
const bola2 ={
    x : 350,
    y : 350,
    r : 30,
    cor : "blue",
    velocidade : 1
};
const bola3 ={
    x : 50,
    y : 50,
    r : 80,
    cor : "orange",
    velocidade : 0.55
};
const bola4 ={
    x : 150,
    y : 260,
    r : 9,
    cor : "black",
    velocidade : 0.07
};

function desenhar(bola){
    contexto.beginPath();
    contexto.arc(bola.x, bola.y, bola.r, 0, Math.PI*2);
    contexto.fillStyle = bola.cor;
    contexto.fill();
    contexto.closePath();
}


function animar(){
    contexto.clearRect(0,0, canvas.width, canvas.height);

    bola.x+=bola.velocidade;
    bola.y-=bola.velocidade;
    desenhar(bola);

    
    bola2.x-=bola2.velocidade;
    bola2.y-=bola2.velocidade;
    desenhar(bola2);

    
    bola3.x+=bola3.velocidade;
    bola3.y-=bola3.velocidade;
    desenhar(bola3);

    
    bola4.x+=bola4.velocidade;
    bola4.y+=bola4.velocidade;
    desenhar(bola4);

    if (bola.x>canvas.width || bola.y>canvas.height){
        bola.velocidade = bola.velocidade*-1

    } else if(bola.x<0 || bola.y<0){
        bola.velocidade = bola.velocidade*-1
    }

    requestAnimationFrame(animar)
}
animar()
