// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=EZTC3.SAO&interval=5min&apikey=40XK7KU6SZTZO61N

// executar api
const R = require('ramda');
var rp = require('request-promise');



var options = {
    uri: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=EZTC3.SAO&interval=5min&apikey=40XK7KU6SZTZO61N&outputsize=compact',
    qs: {
        // access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

const fnConversor = obj => {
    var vl_subtracao = obj['1. open'] - obj['4. close'];
    return {
        'vl_abertura' : obj['1. open'],
        'vl_alta' : obj['2. high'],
        'vl_baixa' : obj['3. low'],
        'vl_fechamento' : obj['4. close'],
        'vl_volume' : obj['5. volume'],
        "vl_variacao" : vl_subtracao,
        "sn_alta" : vl_subtracao > 0 ? true : false
    }
};

rp(options).then(
	function (objJson) {
        var arrValores = objJson['Time Series (Daily)'];                      
        var arrCotacao = R.map(fnConversor, arrValores);
        console.log(arrCotacao);
	}
).catch(
	function (err) {
        // Crawling failed...
	}
);