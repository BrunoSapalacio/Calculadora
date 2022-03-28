let tela = document.querySelector('.tela');
let telaM = document.querySelector('.tela-m');
const tema = document.querySelector('#tema');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const botao = document.querySelectorAll('.botao');
const tippyTema = document.querySelector('#tippy1')
const tippyTela = document.querySelector('#tippy2')
let verificado = false;
let pontoONOFF = false;
let bloqueado = false;
let checar = false;
let check = false;
//let calculo = '';
let telaDisplay = tela.value.toLocaleString('de-DE');

function mensagemUnica() {
            tippy(tippyTema, {
            content: "Clique aqui para mudar o tema da calculadora",
            showOnCreate: true,
            delay: [1000],
            placement: 'top',
            arrow: true,
            animation: 'fade',
            trigger: 'click',
        });
        setTimeout(() => {tippyTema.style.display = 'none'}, 1000);
}
function TemaClaro() {
    tippy('#muda-tema', {
    content: "Tema Claro Ativado",
    showOnCreate: true,
    placement: 'top',
    arrow: true,
    animation: 'fade',
    trigger: 'manual',
    });
}

function TemaEscuro() {
    tippy('#muda-tema', {
    content: "Tema Escuro Ativado",
    showOnCreate: true,
    placement: 'top',
    arrow: true,
    animation: 'fade',
    trigger: 'manual',
    });
}

function erro() {
    tippyTela.style.display = 'block';
    tippy(tippyTela, {
    content: "Insira um número",
    showOnCreate: true,
    placement: 'top',
    arrow: true,
    theme: 'erro',
    animation: 'fade',
    });
    setTimeout(() => {tippyTela.style.display = 'none'}, 1000);
}

function porcetagem() {
    if (tela.value.length == 0) {
        erro();
        return;
    }
    if (verificado == false) {
        return;    
    } else {
        let conta = new Function("return " + telaM.value.replace(",",".") + tela.value.replace(",","."));
        let resultado = conta();
        let resultadoFinal = resultado / 100;
        telaM.value += tela.value + '%';
        tela.value = resultadoFinal.toString().replace(".",",");
        bloqueado = true;
        verificado = false;
        if (tela.value.indexOf(",") > 0) {
            pontoONOFF = true; 
        } else {
            pontoONOFF = false; 
        }
    }
}

function calcular(){
    if (tela.value.length == 0) {
        erro();
        return;
    }
    if (verificado == false) {
        return;    
    }
    let conta = new Function("return " + telaM.value.replace(",",".") + tela.value.replace(",","."));
    let resultado = conta();
    let resultadoFormatado = resultado.toString().replace(".",",");
    //console.log(resultadoFormatado);
    //let resultadoString = parseFloat(resultadoFormatado.split(",")[0]);;
    //console.log(resultadoString.replace(".",","))
    telaM.value += tela.value;
    tela.value = resultadoFormatado.substr(0, 10);
    bloqueado = true;
    verificado = false;
    if (tela.value.indexOf(",") > 0) {
        pontoONOFF = true; 
    } else {
        pontoONOFF = false; 
    }
    console.log(resultadoFormatado);
    /*let resultadoFormatado = resultado.toString();
    if (resultadoFormatado.indexOf(".") >= 1) {
        console.log(resultado);
        console.log(resultadoFormatado);
        console.log(tela.value.indexOf(".") + ' Posicao do . Verificado');
        telaM.value += tela.value;
        Math.round(resultado);
        console.log(Math.round(resultado) + ' ---- ')
        tela.value = resultadoFormatado.substr(0, 10);
        bloqueado = true;
        verificado = false;
        pontoONOFF = false;
    } else {
        console.log(resultado)
        console.log(tela.value)
        telaM.value += tela.value;
        tela.value = resultado;
        bloqueado = true;
        verificado = false;
        pontoONOFF = false;
        Math.round(resultado);
        console.log(Math.round(resultado) + ' ---- ')
        console.log(tela.value.length);
        console.log(tela.value.indexOf(".") + ' Posicao do .');
        }*/
}

function adicionar(texto) {
    if (tela.value.indexOf(",") == -1 && pontoONOFF == true)
    {
        pontoONOFF = false;
    }
    if (pontoONOFF == true && texto == ',') {
        console.log(tela.value.indexOf(".")); 
        return;    
    }
    if (tela.value.indexOf(",") > 0) {
        console.log(tela.value.indexOf("."));
        pontoONOFF = true;
        console.log(pontoONOFF);
    }
    if (bloqueado == true) {
        telaM.value = '';
        //calculo += texto;
        tela.value += texto;
        bloqueado = false;
        console.log(bloqueado) 
    } else {
        //calculo += texto;
        tela.value += texto;
        /*let telaString = tela.value.toString();
        telaDisplay = parseFloat(telaString.split(".")[0]);
        tela.value = telaDisplay.toLocaleString('de-DE');
        console.log(pontoONOFF);
        console.log(calculo);
        console.log(telaDisplay.toLocaleString('de-DE'));
        console.log(tela.value.toString());
        console.log(tela.value.indexOf("."));*/
    }
}

function excluir() {
    tela.value = '';
    telaM.value = '';
}

function apagar() {
    if (bloqueado == true) {
        tela.value = tela.value.substring(0,tela.value.length-1);  
        telaM.value = ''; 
    } else {
        tela.value = tela.value.substring(0,tela.value.length-1);
    }
}

function verificar(texto) {
    if (tela.value.length > 1 && texto == ',') {
        pontoONOFF = true;
        console.log('oi')
        console.log(tela.value.length + ' Valor da tela');
        return
    }
    if (tela.value.length == 1) {
        console.log(tela.value.length + ' Valor da tela');
        tela.value = '';
        erro();
    } else {
        console.log(tela.value.length + ' Valor da tela');
        telaM.value += tela.value;
        tela.value = '';
        verificado = true;
        //checar = true;
        console.log(tela.value)
        pontoONOFF = false;
    }
}

function mudartema() {
    if (tema.checked == false) {
        tema.checked = false;
        body.style.background = "#0A0A0A";
        container.style.background = "#141414";
        tela.style.background = "#415A6B";
        tela.style.color = "#fff";
        telaM.style.background = "#415A6B";
        telaM.style.color = "#fff";
        Copy.style.color = "#fff";
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#ffffff';
        }
        TemaEscuro();
    } else {
        tema.checked = true;
        console.log('light');
        body.style.background = "#fff";
        container.style.background = "#EEEEEE";
        tela.style.background = "#fff";
        tela.style.color = "#141414";
        telaM.style.background = "#fff";
        telaM.style.color = "#141414";
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#141414';
        }
        TemaClaro();
    }
}
