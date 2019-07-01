function adicionar() {
    var table = document.querySelector('#tabela');
    
    var inputNome = document.querySelector('#nome');
    var inputPagina = document.querySelector('#pagina');
    var inputGenero = document.querySelector('#genero');
   
    var linha = document.createElement('tr');
    
    var conN = document.createElement('td');
    conN.appendChild(document.createTextNode(inputNome.value));
    var conP = document.createElement('td');
    conP.appendChild(document.createTextNode(inputPagina.value));
    var conG = document.createElement('td');
    conG.appendChild(document.createTextNode(inputGenero.value));

    linha.appendChild(conN);
    linha.appendChild(conP);
    linha.appendChild(conG);

    table.appendChild(linha);
    inputNome.value = '';
    inputPagina.value = '';
    inputGenero.value = '';
}