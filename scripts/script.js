var idi = 0;
function adicionar() {
    var table = document.querySelector('#tabela');
    
    var inputNome = document.querySelector('#nome');
    var inputPagina = document.querySelector('#pagina');
    var inputGenero = document.querySelector('#genero');
   
    var linha = document.createElement('tr');
    linha.setAttribute('id', idi);
    
    var conN = document.createElement('td');
    conN.appendChild(document.createTextNode(inputNome.value));
    var conP = document.createElement('td');
    conP.appendChild(document.createTextNode(inputPagina.value));
    var conG = document.createElement('td');
    conG.appendChild(document.createTextNode(inputGenero.value));

    var excluir = document.createElement('td');
    var botao = document.createElement('button');
    botao.appendChild(document.createTextNode('Excluir'));
    botao.setAttribute('onclick', 'excluir('+idi+')');
    excluir.appendChild(botao);


    linha.appendChild(conN);
    linha.appendChild(conP);
    linha.appendChild(conG);
    linha.appendChild(excluir);

    table.appendChild(linha);
    inputNome.value = '';
    inputPagina.value = '';
    inputGenero.value = '';
    idi++;
}
function excluir(i) {
    var table = document.querySelector('#tabela');
    var linhaE = document.getElementById(i);
    table.removeChild(linhaE);
}