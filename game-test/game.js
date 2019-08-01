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
var nr_posicao_bola_x = 1;
var nr_posicao_bola_y = 1;
var nr_bolas = 0;

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

    objCanvas.fillStyle = "#FF00FF";
    objCanvas.font = "16px Arial";
    objCanvas.fillText(
        nr_posicao_atual + " - pontos: " + nr_pontos + " - bolas: " 
            + nr_bolas,
        10, 
        20
    );
}

// function
function desenharBola()
{
    objCanvas.beginPath(); 
    objCanvas.fillStyle = "#FF0000";

    objCanvas.arc(
        nr_bola_x + (nr_posicao_bola_x * 50) - 25, 
        nr_bola_y + (nr_posicao_bola_y * 50), 
        25, 0, 2 * Math.PI
    );

    objCanvas.fillStyle = "red";
    objCanvas.fill();
    objCanvas.stroke();
}

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

function testarPosicaoBola() 
{
    if (nr_posicao_bola_y < 7) {
        nr_posicao_bola_y++;
    }

    // ganha o ponto?
    if (
        nr_posicao_bola_y == 7
        && nr_posicao_atual == nr_posicao_bola_x
    ) {
        nr_pontos++;

        nr_posicao_bola_x = Math.floor((Math.random() * 5) + 1);
        nr_posicao_bola_y = 1;
        nr_bolas++;
    }

    if (nr_posicao_bola_y >= 7) {
        // reinicia
        nr_posicao_bola_x = Math.floor((Math.random() * 5) + 1);
        nr_posicao_bola_y = 1;
        nr_bolas++;
    }
}


// inicia jogo

function startGame()
{
    limparTela();
    desenharPosicaoRaquete();
    desenharRaquete();
    desenharBola();
    testarPosicaoBola();
}

startGame();
setInterval(startGame, 1000);