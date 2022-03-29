const tema = document.querySelector('#tema');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const botao = document.querySelectorAll('.botao');
const tippyTema = document.querySelector('#tippy1')
const tippyTela = document.querySelector('#tippy2')
const copyID = document.querySelector('#copy')
let tela = document.querySelector('.tela');
let telaM = document.querySelector('.tela-m');
let verificado = false;
let virgulaONOFF = false;
let bloqueado = false;

function mensagemUnica() {
    tippy(tippyTema, {
        content: "Para mudar o tema da calculadora, clique aqui",
        showOnCreate: true,
        delay: [500],
        placement: 'top',
        arrow: true,
        animation: 'fade',
        trigger: 'click',
    });
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

function copy() {
    tippy('#copy', {
        content: "Clique aqui para conhecer os meus outros projetos",
        placement: 'top',
        arrow: true,
        animation: 'fade',
    });
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
        telaM.value += tela.value + '% =';
        tela.value = resultadoFinal.toString().replace(".",",");
        bloqueado = true;
        verificado = false;
        if (tela.value.indexOf(",") > 0) {
            virgulaONOFF = true; 
        } else {
            virgulaONOFF = false; 
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
    telaM.value += tela.value + ' =';
    tela.value = resultadoFormatado.substr(0, 10);
    bloqueado = true;
    verificado = false;
    if (tela.value.indexOf(",") > 0) {
        virgulaONOFF = true; 
    } else {
        virgulaONOFF = false; 
    }
}

function adicionar(texto) {
    if (tela.value.indexOf(",") == -1 && virgulaONOFF == true)
    {
        virgulaONOFF = false;
    }
    if (virgulaONOFF == true && texto == ',') {
        return;    
    }
    if (tela.value.indexOf(",") > 0) {
        virgulaONOFF = true;
    }
    if (bloqueado == true) {
        telaM.value = '';
        tela.value += texto;
        bloqueado = false; 
    } else {
        tela.value += texto;
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
        virgulaONOFF = true;
        return;
    }
    if (tela.value.length == 1) {
        tela.value = '';
        erro();
    } else {
        telaM.value += tela.value;
        tela.value = '';
        verificado = true;
        virgulaONOFF = false;
    }
}

function mudartema() {
    tippyTema.style.display = 'none';
    if (tema.checked == false) {
        tema.checked = false;
        body.style.background = "#0A0A0A";
        container.style.background = "#141414";
        tela.style.background = "#415A6B";
        tela.style.color = "#fff";
        telaM.style.background = "#415A6B";
        telaM.style.color = "#fff";
        copyID.style.color = "#fff";
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#ffffff';
        }
        TemaEscuro();
    } else {
        tema.checked = true;
        body.style.background = "#fff";
        container.style.background = "#EEEEEE";
        tela.style.background = "#fff";
        tela.style.color = "#141414";
        telaM.style.background = "#fff";
        telaM.style.color = "#141414";
        copyID.style.color = "#141414";
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#141414';
        }
        TemaClaro();
    }
}
