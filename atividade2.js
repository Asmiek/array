function processo(valor){
    switch(valor){
        case '1': gerarpoke()
        break;
        case '2': taxapoke()
        break;
        case '3': historicopoke()
        break;
        
    }
}

let atual = {
    pokemonAtual: null,
    historico: []
}

function gerarpoke(){

let chance = Math.random();   
let pokemons;                 
let tipo;                    

if (chance <= 0.8) {
    alert("Você encontrou um pokemão normal");
    tipo = "Normal";
    pokemons = ["Pikachu", "Bulbassauro", "Charmander", "Squirtle", "Teddiursa", "Snorlax", "Pidgey", "Zubat", "Magikarp", "Eevee"];
}
else if (chance > 0.8 && chance <= 0.95) {
    alert("Você encontrou um pokemão raro");
    tipo = "Raro";
    pokemons = ["Dragonite", "Tyranitar", "Salamence", "Metagross", "Garchomp", "Lucario", "Gyarados", "Lapras", "Vaporeon", "Jolteon"];
}
else {
    alert("Você encontrou um pokemão lendário");
    tipo = "Lendário";
    pokemons = ["Mewtwo" , "Mew", "Lugia", "Ho-Oh", "Rayquaza", "Groudon", "Kyogre", "Dialga", "Palkia", "Giratina"];
}

let indice = Math.floor(Math.random() * pokemons.length);

    atual.pokemonAtual = { nome: pokemons[indice], tipo: tipo };
    atual.historico.push(atual.pokemonAtual);

alert("Você encontrou um " + atual.pokemonAtual.nome + " do tipo " + atual.pokemonAtual.tipo);

}

function taxapoke(){

    let pokemon = atual.pokemonAtual;
    let chancecap;

    if (pokemon === null) {
        alert("Nenhum pokemão gerado");
        return;
    }

    if (pokemon.tipo === "Normal") {
        chancecap = "Item normal = 1.0x\nItem raro  = 2.0x";
    }
    else if (pokemon.tipo === "Raro") {
        chancecap = "Item normal = 0.5x\nItem raro  = 1.0x";
    }
    else if (pokemon.tipo === "Lendário") {
        chancecap = "Item normal = 0.1x\nItem raro  = 0.5x";
    }
    alert("Taxas de captura para " + pokemon.nome + " (" + pokemon.tipo + "):\n" + chancecap);
}

function historicopoke(){
    if (atual.historico.length === 0) {
        alert("Nenhum pokemão gerado");
        return;
    }
    let historico = "Histórico de pokemãos gerados:\n";

    for (let i = 0; i < atual.historico.length; i++) {
    let poke = atual.historico[i];
    historico = historico + "- " + poke.nome + " (" + poke.tipo + ")\n";
}

    alert(historico);

}






function menu()
{
    let escolha 

    do{
        escolha = prompt(`Menu
        1- Gerar pokemão
        2- Taxas de captura
        3- Histórico de pokemãos gerados
        0- Encerrar`)
        
        processo(escolha)

    }while(escolha != 0)
}

menu()