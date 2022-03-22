let tela = document.querySelector('.tela');
let telaM = document.querySelector('.tela-m');
const tema = document.querySelector('#tema');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const botao = document.querySelectorAll('.botao');
let bloqueado = true;
let verificado = false;
let virgulaONOFF = false;

function erro() {
    Swal.fire({
        icon: 'error',
        title: 'ERRO!',
        text: 'Digite um número!',
    })
}

function calcular(){
    if (tela.value.length == 0) {
        erro();
        return;
    }
    if (bloqueado == true || verificado == false) {    
    } else {
        let conta = new Function("return " + telaM.value + tela.value);
        let resultado = conta();
        console.log(resultado)
        console.log(tela.value)
        telaM.value += tela.value
        tela.value = resultado;
        bloqueado = true;
        verificado = false;
        console.log(tela.value.length);
    }
}

function adicionar(texto) {
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

function verificar() {
    if (tela.value.length == 1) {
        tela.value = '';
        erro();
    } else {
        telaM.value += tela.value;
        tela.value = '';
        verificado = true;
        console.log(tela.value)
    }
}

function virgula() {
    if (tela.value.length == 1) {
        tela.value = '';
        erro();
    } else {
            return; 
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
        for (i = 0, len = botao.length; i < len; i++) {
            botao[i].style.color = '#ffffff';
        }
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
    }
}