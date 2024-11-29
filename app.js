function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    / UTILIZAMOS O VALUE PARA RECEBER A ENTRADA DE ALGUM DADO/

    if(de >=ate ) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número." Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve  ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        alterarStatusBotao();
        return;
    }


    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        / O INCLUDES É UTILIZADO QUANDO PASSAMOS UM ELEMENTO, E ELE INFORMA SE ESSE ELEMENTO JÁ EXISTE DENTRO DE UM ARRAY, RETORNANDO UM BOOLEAN TRUE OR FALSE/
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            
        }

        / FUNÇÃO PUSH SERVE PARA EMPURRAR E COLOCAR OUTRO ELEMENTO DENTRO DE UM ARRAY/
        sorteados.push(numero);
    }

    / EXIBINDO OS NUMEROS NÁ PAGINA/ 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`
    alterarStatusBotao();
}

/ FUNÇÃO PARA OBTER O NUMERO ALEATORIO /

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

/ CRIANDO FUNÇÃO PARA ALTERAR O STATUS DO BOTAO REINICIAR/ 

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

/ CRIANDO FUNÇÃO REINICIAR PARA LIMPAR TODOS OS CAMPOS/

function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}