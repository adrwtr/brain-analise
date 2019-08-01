var objElementoCanvas = document.getElementById("canvas_teste");
var objCanvas = objElementoCanvas.getContext("2d");

// canvas
var nr_canvas_w = 250;
var nr_canvas_h = 300;

// raquete
var nr_raquete_x = 0;
var nr_raquete_y = 250;

// bola
var nr_bola_x = 0;
var nr_bola_y = 0;

// rules
var nr_total_posicoes = 5;
var nr_posicao_atual = 1;
var nr_pontos = 0;

function limparTela()
{
    objCanvas.clearRect(0, 0, nr_canvas_w, nr_canvas_h);
}

function desenharRaquete()
{
    objCanvas.beginPath(); 
    objCanvas.fillStyle = "#4CAF50";
    objCanvas.fillRect(nr_raquete_x, nr_raquete_y, 50, 50);
    objCanvas.stroke();
}

function desenharPosicaoRaquete()
{
    objCanvas.beginPath(); 

    objCanvas.font = "16px Arial";
    objCanvas.fillText(
        nr_posicao_atual + " - pontos: " + nr_pontos, 
        10, 
        20
    );
}

// function


// controles

function moverRaqueteEsquerda()
{
    if (testarPosicao(-50) == true) {
        nr_posicao_atual = nr_posicao_atual - 1;
        nr_raquete_x = nr_raquete_x - 50;
    }
}

function moverRaqueteDireita()
{
    if (testarPosicao(50) == true) {
        nr_posicao_atual = nr_posicao_atual + 1;
        nr_raquete_x = nr_raquete_x + 50;
    }
}

// nao deixa a raquete sair do jogo
function testarPosicao(
    nr_nova_posicao
) {
    if (
        nr_nova_posicao > 0 
        && nr_posicao_atual <= 4
    ) {
        return true;
    }

    if (
        nr_nova_posicao < 0 
        && nr_posicao_atual >= 2
    ) {
        return true;
    }

    return false;
}


// inicia jogo

function startGame()
{
    limparTela();
    desenharPosicaoRaquete();
    desenharRaquete();
}

startGame();
setInterval(startGame, 1000);

/*
objCanvas.beginPath();
x = 95;
y = 50;
radio = 10;

objCanvas.arc(x, y, radio, 0, 2 * Math.PI);
objCanvas.stroke();
objCanvas.fill();

objCanvas.fillStyle = "#000000";
objCanvas.fillRect(0, 250, 50, 50);
objCanvas.stroke();
objCanvas.fill();


function moverRaquete() 
{
    var objElementoCanvas = document.getElementById("canvas_teste");
    var objCanvas = objElementoCanvas.getContext("2d");
    objCanvas.clearRect(0, 0, nr_canvas_w, nr_canvas_h);
    objCanvas.beginPath();

    objCanvas.fillStyle = "#000000";
    objCanvas.fillRect(100, 250, 150, 50);
    objCanvas.stroke();
    objCanvas.fill();
}
*/