let tela = document.querySelector('.tela');
let telaM = document.querySelector('.tela-m');
const tema = document.querySelector('#tema');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const botao = document.querySelectorAll('.botao');
const tippyTema = document.querySelector('.tippy-tema')
let verificado = false;
let pontoONOFF = false;
let bloqueado = false;
let checar = false;
let check = false;

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
<<<<<<< HEAD
=======
        tippyTema.style.display="none";
>>>>>>> 3a0a0ac1af3f80f3ea2b61235f24ec25b46a25b6
}
function TemaClaro() {
    tippy('#muda-tema', {
    content: "Tema Claro Ativado!",
    showOnCreate: true,
    placement: 'top',
    arrow: true,
    animation: 'fade',
    trigger: 'manual',
    });
}

function TemaEscuro() {
    tippy('#muda-tema', {
    content: "Tema Escuro Ativado!",
    showOnCreate: true,
    placement: 'top',
    arrow: true,
    animation: 'fade',
    trigger: 'manual',
    });
}

function erro() {
    tippy('#Tela', {
    content: "Insira um número!",
    showOnCreate: true,
    placement: 'top-end',
    arrow: true,
    theme: 'erro',
    animation: 'fade',
    trigger: 'manual',
    });
}

function calcular(){
    if (tela.value.length == 0) {
        erro();
        return;
    }
    if (verificado == false) {
        return;    
    }
    let conta = new Function("return " + telaM.value + tela.value);
    let resultado = conta();
    let resultadoFormatado = resultado.toString();
    if (resultadoFormatado.indexOf(".") >= 1) {
        console.log(resultado);
        console.log(tela.value.indexOf(".") + ' Posicao do . Verificado');
        telaM.value += tela.value;
        Math.round(resultado);
        console.log(Math.round(resultado) + ' ---- ')
        tela.value = resultado.toFixed(2);
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
        }
}

function adicionar(texto) {
    //const stringNumero = tela.value.toString();
    if (tela.value.indexOf(".") == -1 && pontoONOFF == true)
    {
        pontoONOFF = false;
    }
    if (pontoONOFF == true && texto == '.') {
        console.log(tela.value.indexOf(".")); 
        return;    
    }
    if (tela.value.indexOf(".") > 0) {
        console.log(tela.value.indexOf("."));
        pontoONOFF = true;
        console.log(pontoONOFF);
    }
    if (bloqueado == true) {
        telaM.value = '';
        tela.value += texto;
        bloqueado = false;
        console.log(bloqueado) 
    } else {
        tela.value += texto;
        console.log(pontoONOFF);
        console.log(tela.value.indexOf("."));
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
    if (tela.value.length > 1 && texto == '.') {
        pontoONOFF = true;
        console.log('oi')
        console.log(tela.value.length + ' Valor da tela');
        return
    }
    /*if (checar == true && texto == '+') {
        let conta = new Function("return " + telaM.value + tela.value);
        let resultado = conta();
        telaM.value = resultado;
        checar = false;
    }*/
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
    tippyTema.style.display="none";
    if (tema.checked == false) {
        tema.checked = false;
        body.style.background = "#0A0A0A";
        container.style.background = "#141414";
        tela.style.background = "#415A6B";
        tela.style.color = "#fff";
        telaM.style.background = "#415A6B";
        telaM.style.color = "#fff";
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#ffffff';
        }
        TemaEscuro();
        console.log('Dark');
        console.log(tema)
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
        //tippyTema.remove();
        TemaClaro();
    }
}
