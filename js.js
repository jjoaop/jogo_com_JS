let motor = false;

let altitude = 300;
let combustivel = 45;
let velocidade = 0;
let aceleracao = 0;

let liga = () => {
    document.getElementById("nave").src ="midia/nave1.png";
    motor = true;
}

let desliga = () => {
    document.getElementById("nave").src ="midia/nave0.png";
    motor = false;
}

let ciclo = () => {
    if(combustivel <= 0){
        desliga();
    }

    if(motor) {
        aceleracao = 0.2;
        combustivel--;
    }
    else{
        aceleracao = -0.3
    }
    velocidade += aceleracao;
    altitude += velocidade;

    if(altitude <= 0) {
        if (velocidade <= -2.4) {
            alert("FIM DE JOGO: NAVE EXPLODIU! 💥🚀💥");
        }
        else{
            alert("PARABÉNS! POUSO BEM SUCEDIDO 🚀🌎");
        }
        clearInterval(intervalo);
    }
    
    document.getElementById("dados").innerHTML = `

        VELOCIDADE = ${velocidade.toFixed(3)}; 
        <br>
        COMBUSTÍVEL = ${combustivel};
    
    `
    document.getElementById('nave').style.top = (400 - altitude) + "px";
}

intervalo = window.setInterval(ciclo, 100);

document.addEventListener('keydown', liga);
document.addEventListener('keyup', desliga);