var canvas = document.getElementById("jogo");
var contexto = canvas.getContext("2d");

const bola ={
    x : 50,
    y : 50,
    r : 10,
    cor : "red",
    velocidade : 10
};
const bola2 ={
    x : 750,
    y : 350,
    r : 15,
    cor : "blue",
    velocidade : 1
};
const bola3 ={
    x : 400,
    y : 250,
    r : 35,
    cor : "black",
    velocidade : 2
};
const bola4 ={
    x : 50,
    y : 350,
    r : 20,
    cor : "green",
    velocidade : 1
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
  
    desenhar(bola);

    
   
    bola2.y-=bola2.velocidade;
    desenhar(bola2);

    
    bola3.x+=bola3.velocidade;
    bola3.y-=bola3.velocidade;
    desenhar(bola3);

    
    bola4.x+=bola4.velocidade;
    
    desenhar(bola4);

    if (bola.x>canvas.width || bola.y>canvas.height){
        bola.velocidade = bola.velocidade*-1

    } else if(bola.x<0 || bola.y<0){
        bola.velocidade = bola.velocidade*-1
    }

    if (bola2.x>canvas.width || bola2.y>canvas.height){
        bola2.velocidade = bola2.velocidade*-1

    } else if(bola2.x<0 || bola2.y<0){
        bola2.velocidade = bola2.velocidade*-1
    }

    if (bola3.x>canvas.width || bola3.y>canvas.height){
        bola3.velocidade = bola3.velocidade*-1

    } else if(bola3.x<0 || bola3.y<0){
        bola3.velocidade = bola3.velocidade*-1
    }

    if (bola4.x>canvas.width || bola4.y>canvas.height){
        bola4.velocidade = bola4.velocidade*-1

    } else if(bola4.x<0 || bola4.y<0){
        bola4.velocidade = bola4.velocidade*-1
    }

    requestAnimationFrame(animar)
}
animar()
