var rp = require('request-promise');
rp('http://data.fixer.io/api/latest?access_key=aa180a99ab28c2b51e7ddf39b17e67c1&format=1')
    .then(function (vienenTodosLosdatos) {
        var datosParseados = JSON.parse(vienenTodosLosdatos);
        var monedaExtranjera = datosParseados.rates[process.argv[2]];
        var monedaExtranjera2= datosParseados.rates[process.argv[3]];
        console.log(monedaExtranjera* monedaExtranjera2);
    });

