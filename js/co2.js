/**
 * Created by henri on 02/10/2017.
 * http://www.greenco2.net/calculadora.html
 */
function resultado(objeto,indice) {
    valores = new Array(14);
    valores[0] = 0.000084; // energia eletrica
    valores[1] = 0.07;
    valores[2] = 0.004;
    valores[3] = 0.00090;
    valores[4] = 0.00120;
    valores[5] = 0.0001809;
    valores[6] = 0.0002139;
    valores[7] = 0.00025;
    valores[8] = 0.00005;
    valores[9] = 0.00007;
    valores[10] = 0.0001892;
    valores[11] = 0.00031;
    valores[12] = 0.00030;
    valores[13] = 0.00013;
    valores[14] = 0.00003;
    result = objeto * valores[indice];
    console.log(result);
    total(result);
}

function total(arg) {
    soma = 0;
    hiddens = arg;
    for (a=0; a<hiddens; a++) {
        if (hiddens) {
            valoratual = eval(hiddens);
            soma = soma + valoratual*12;
        }
    }
    tco2e = soma * 12;
    //document.getElementById("tCO2e").innerHTML = Math.round(tco2e) + " tCO2";
    console.log(Math.round(tco2e));
    tco = soma / 3.67;
    //document.getElementById("tCO").innerHTML = Math.round(tco) + " tCO";
    console.log(Math.round(tco));
    arv = soma * 3.6;
    //document.getElementById("arvores").innerHTML = Math.round(arv);
    console.log(Math.round(arv));
    //valor = arv * 10;
    //document.getElementById("neutr").innerHTML = "US$ " + Math.round(valor);
}