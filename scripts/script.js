class Livro {
    constructor(n, p, g, i) {
        this.Nome = n;
        this.Pagina = p;
        this.Genero = g;
        this.Id = i;
    }
    getNome() {
        return this.Nome;
    }
    getPagina() {
        return this.Pagina;
    }
    getGenero() {
        return this.Genero;
    }
}
localStorage.getItem('idolos')?console.log():localStorage.setItem('idolos', 0);
var idi = JSON.parse(localStorage.getItem("idolos")); ;

function restore() {
    for (let i = 0; i < idi; i++) {
        if (localStorage.getItem(i)) {
            var table = document.querySelector('table');
            var res = JSON.parse(localStorage.getItem(i));
            
            var linha = document.createElement('tr');
            linha.setAttribute('id', res.Id);

            var conN = document.createElement('td');
            conN.appendChild(document.createTextNode(res.Nome));
            var conP = document.createElement('td');
            conP.appendChild(document.createTextNode(res.Pagina));
            var conG = document.createElement('td');
            conG.appendChild(document.createTextNode(res.Genero));

            var excluir = document.createElement('td');
            var botao = document.createElement('button');
            botao.appendChild(document.createTextNode('Excluir'));
            botao.setAttribute('onclick', 'excluir(' + res.Id + ')');
            excluir.appendChild(botao);

            linha.appendChild(conN);
            linha.appendChild(conP);
            linha.appendChild(conG);
            linha.appendChild(excluir);
            
            table.appendChild(linha);
        }
    }
    
}
function adicionar() {
    var table = document.querySelector('#tabela');
    var inputNome = document.querySelector('#nome');
    var inputPagina = document.querySelector('#pagina');
    var inputGenero = document.querySelector('#genero');

    var linha = document.createElement('tr');
    linha.setAttribute('id', idi);

    var novoLivro = new Livro(inputNome.value, inputPagina.value, inputGenero.value, idi);
    console.log(novoLivro);

    var conN = document.createElement('td');
    conN.appendChild(document.createTextNode(novoLivro.getNome()));
    var conP = document.createElement('td');
    conP.appendChild(document.createTextNode(novoLivro.getPagina()));
    var conG = document.createElement('td');
    conG.appendChild(document.createTextNode(novoLivro.getGenero()));

    var excluir = document.createElement('td');
    var botao = document.createElement('button');
    botao.appendChild(document.createTextNode('Excluir'));
    botao.setAttribute('onclick', 'excluir(' + idi + ')');
    excluir.appendChild(botao);

    linha.appendChild(conN);
    linha.appendChild(conP);
    linha.appendChild(conG);
    linha.appendChild(excluir);

    table.appendChild(linha);
    inputNome.value = '';
    inputPagina.value = '';
    inputGenero.value = '';

    localStorage.setItem(idi, JSON.stringify(novoLivro));
    idi++;
    localStorage.setItem('idolos', idi);
}
function excluir(i) {
    var table = document.querySelector('#tabela');
    var linhaE = document.getElementById(i);
    table.removeChild(linhaE);
    localStorage.removeItem(i);
}
restore();