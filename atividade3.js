function processo(valor, estado){
    switch(valor){
        case '1': inserirdadolivro(estado)
        break;
        case '2': nometodoslivros(estado)
        break;
        case '3': nomeespecifico(estado)
        break;
        case '4': autorespcifico(estado)
        break;

    }
}

let estado = {
    livros: []
}

function inserirdadolivro(estado){

    let livro = {};

    livro.nome = prompt("Qual o nome do livro?");
    livro.autor = prompt("Quem é o autor?");
    livro.ano = prompt("Qual o ano de publicação?");
    livro.editora = prompt("Qual a editora?");

    estado.livros.push(livro);
    alert("Livro cadastrado na coleção");
}

function nometodoslivros(estado){
    if (estado.livros.length === 0) {
        alert("Nenhum livro cadastrado");
        return;
    }
    let nomes = "Nomes dos livros cadastrados:\n";

    for (let i = 0; i < estado.livros.length; i++) {
        nomes = nomes + "- " + estado.livros[i].nome + "\n";
    }
    alert(nomes);
}

function nomeespecifico(estado) {
    
    let nomeBusca = prompt("Digite o nome do livro que deseja ver:");

    let livro = estado.livros.find(l => l.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (!livro) {
        alert("Livro não encontrado!");
        return;
    }

    let info = "Dados do livro:\n";
    info += "Nome: " + livro.nome + "\n";
    info += "Autor: " + livro.autor + "\n";
    info += "Ano de publicação: " + livro.ano + "\n";
    info += "Editora: " + livro.editora;

    alert(info);
}

function autorespcifico(estado) {
    let autorBusca = prompt("Digite o nome do autor:");
    let livrosAutor = estado.livros.filter(a => a.autor.toLowerCase() === autorBusca.toLowerCase());

    if (livrosAutor.length === 0) {
        alert("Nenhum livro encontrado para este autor!");
        return;
    }

    let lista = "Livros do autor " + autorBusca + ":\n";
    for (let livro of livrosAutor) {
        lista += "- " + livro.nome + " \nAno: " + livro.ano + " \nEditora: " + livro.editora + "\n";
    }

    alert(lista);
}


function menu()
{
    let escolha 

    do{
        escolha = prompt(`Menu
        1- Inserir dados do livro
        2- Imprimir Nomes de todos os livros cadastrados
        3- Imprimir Todos os dados de um livro específico
        4- Imprimir todos os dados dos livros de um autor específico
        0- Encerrar`)
        
        processo(escolha, estado);

    }while(escolha != 0)
}

menu()