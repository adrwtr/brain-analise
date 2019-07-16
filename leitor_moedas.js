// https://economia.awesomeapi.com.br/json/list/USD-BRL/120

// executar api
const R = require('ramda');

var obj = [
{
    "varBid": "0.0055",
    "high": "3.7628",
    "low": "3.7296",
    "pctChange": "0.15",
    "bid": "3.7402",
    "ask": "3.7423",
    "timestamp": "1563130669"
  },
  {
    "varBid": "-0.0161",
    "high": "3.7100",
    "low": "3.7296",
    "pctChange": "-0.43",
    "bid": "3.837",
    "ask": "3.7388",
    "timestamp": "1562965195"
  },
  {
    "varBid": "-0.0161",
    "high": "3.7100",
    "low": "3.7296",
    "pctChange": "-0.43",
    "bid": "3.937",
    "ask": "3.7388",
    "timestamp": "1562965195"
  }
  ,
  {
    "varBid": "-0.0161",
    "high": "3.7100",
    "low": "3.7296",
    "pctChange": "-0.43",
    "bid": "3.637",
    "ask": "3.7388",
    "timestamp": "1562965195"
  }
];

const fnPropPrecoMaisAlto = obj => R.view(R.lensProp('high'), obj);
const fnPropPrecoMaisBaixo = obj => R.view(R.lensProp('low'), obj);
const fnPropValorFinal = obj => R.view(R.lensProp('bid'), obj);
const fnPropVariacao = obj => R.view(R.lensProp('varBid'), obj);


var fnLeitorConversao = obj => {
    return {
            "vl_maximo" : fnPropPrecoMaisAlto(obj),
            "vl_minimo" : fnPropPrecoMaisBaixo(obj),
            "vl_diferenca" : fnPropPrecoMaisAlto(obj) - fnPropPrecoMaisBaixo(obj),
			"vl_preco_final" : fnPropValorFinal(obj),
			"vl_variacao" : fnPropVariacao(obj),
            "sn_alta" : false
        };    
}

var arrValores = R.map(fnLeitorConversao, obj);

function fnVerificaSeFoiAlta(arrAtual, nr_posicao) {	
	var vl_subtracao = 0;
	var vl_preco_atual = 0;
	var vl_preco_anterior = 0;

	if (nr_posicao < arrAtual.length) {
		if (nr_posicao != 0) {
			vl_preco_atual = arrAtual[nr_posicao].vl_preco_final;
			vl_preco_anterior = arrAtual[nr_posicao - 1].vl_preco_final;
			vl_subtracao = vl_preco_atual - vl_preco_anterior;

			// se o valor atual for maior q o valor anterior, true
			arrAtual[nr_posicao].sn_alta = vl_subtracao > 0 ? true : false; 
		}

		return fnVerificaSeFoiAlta(
			arrAtual, 
			nr_posicao + 1
		);
	}
	return arrAtual;
}

arrValores = fnVerificaSeFoiAlta(arrValores, 0);

arrValores.forEach(
	element => {
		console.log(element.sn_alta)
	}
);
