/**
 * Created by henri on 08/09/2017.
 */
///<reference path="src/CalculoFotoVoltaico.ts"/>
module App{
    let contaEnergia: number;
    let energiaGerada: number;
    let valorTarifa: number;
    let hsp: number;
    let potenciaModulo: number;
    let areaModulo: number;
    let rendimentoModulo: number;
    let taxaDisponibilidade: number;
    let energiaAnualGerada: number;
    let valorOrcamento: number;
    let precoKwp: number;
    let $uf: any;
    let $btn: any;
    let $hidden: any;
    let despesaViagem: any;

//  @todo parametros do sistema
//=============================================

    hsp = 4.27;
    potenciaModulo = 325;
    areaModulo = 1.92;
    rendimentoModulo = 0.1674;
    taxaDisponibilidade = 50;
    valorOrcamento = 44889.31;
    precoKwp = 6695.58;
    despesaViagem = false;

//==============================================

    $uf = document.getElementById('estados');
    $btn = document.getElementsByClassName('primary button');
    $hidden = document.getElementById('metainput');

    $btn[0].onclick = function () {
        console.log($hidden.value);
        if ( $hidden.value !== '4271 '){
            console.log($hidden.value + ' Rondonópolis');
            //precoMaxOrcamento = precoMaxOrcamento + 2000;
            despesaViagem = 2000;
        }
        let regexs = new CalculoFotoVoltaico(
            contaEnergia,energiaGerada,
            valorTarifa,hsp,
            potenciaModulo,areaModulo,
            rendimentoModulo,taxaDisponibilidade,
            energiaAnualGerada,valorOrcamento,precoKwp,despesaViagem
        );
        valorTarifa = +(<HTMLBodyElement>$uf.selectedOptions[0]).dataset.tarifa;
        energiaGerada = regexs.regexDecimal(+(<HTMLInputElement>document.getElementById('kwh')).value);
        //energiaGerada = +(<HTMLInputElement>document.getElementById('kwh')).value;
        contaEnergia = energiaGerada * valorTarifa;
        let calculo = new CalculoFotoVoltaico(
            contaEnergia,energiaGerada,
            valorTarifa,hsp,
            potenciaModulo,areaModulo,
            rendimentoModulo,taxaDisponibilidade,
            energiaAnualGerada,valorOrcamento,precoKwp,despesaViagem
        );

        let obj: any;
        obj = calculo.execute();
        //energiaGerada = regexs.regexDecimal(+(<HTMLInputElement>document.getElementById('kwh')).value);
        console.log(obj);
        console.log(energiaGerada);
        (<HTMLSpanElement>document.getElementById('geracao-anual')).textContent = obj.energiaGeradaAnual;
        (<HTMLSpanElement>document.getElementById('mgeracao-anual')).textContent = obj.energiaGeradaAnual;
        (<HTMLSpanElement>document.getElementById('tamanho-sistema')).textContent = obj.potenciaKwp;
        (<HTMLSpanElement>document.getElementById('mtamanho-sistema')).textContent = obj.potenciaKwp;
        (<HTMLSpanElement>document.getElementById('qtd-modulos')).textContent = obj.quantModulos;
        (<HTMLSpanElement>document.getElementById('mqtd-modulos')).textContent = obj.quantModulos;
        (<HTMLSpanElement>document.getElementById('economial-mensal')).textContent = obj.valorEconomiaMensal;
        (<HTMLSpanElement>document.getElementById('meconomial-mensal')).textContent = obj.valorEconomiaMensal;
        (<HTMLSpanElement>document.getElementById('economia-trinta-anos')).textContent = obj.resultFinalInvest;
        (<HTMLSpanElement>document.getElementById('meconomia-trinta-anos')).textContent = obj.resultFinalInvest;
        (<HTMLSpanElement>document.getElementById('precoMinOrcamento')).textContent = obj.precoMinOrcamento;
        (<HTMLSpanElement>document.getElementById('mprecoMinOrcamento')).textContent = obj.precoMinOrcamento;
        (<HTMLSpanElement>document.getElementById('precoMaxOrcamento')).textContent = obj.precoMaxOrcamento;
        (<HTMLSpanElement>document.getElementById('mprecoMaxOrcamento')).textContent = obj.precoMaxOrcamento;
        (<HTMLSpanElement>document.getElementById('area-instalacao')).textContent = obj.areaInst.toPrecision(3);
        (<HTMLSpanElement>document.getElementById('marea-instalacao')).textContent = obj.areaInst.toPrecision(3);
    }
}