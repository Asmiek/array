let nomes = [];
let aval = [];

for (let i = 0; i < 6; i++) {
  nomes[i] = prompt("Digite o nome do filme " + (i+1) + ":");
  aval[i] = Number(prompt("Digite a nota do filme " + nomes[i] + ":"));
}

let opcao = "";
while (opcao != "d") {
  opcao = prompt(
    "Menu:\n" +
    "a) Mostrar 1 filme\n" +
    "b) Avaliar filme (nova nota)\n" +
    "c) Alterar filme\n" +
    "d) Finalizar"
  );

  if (opcao == "a") {
    let i = Number(prompt("Digite o índice (0 a 5):"));
    alert("Filme: " + nomes[i] + " | Nota: " + aval[i]);
  }

  else if (opcao == "b") {
    let i = Number(prompt("Digite o índice (0 a 5):"));
    let nova = Number(prompt("Digite a nova nota:"));
    aval[i] = (aval[i] + nova) / 2;
    alert("Nova nota: " + aval[i]);
  }

  else if (opcao == "c") {
    let i = Number(prompt("Digite o índice (0 a 5):"));
    nomes[i] = prompt("Novo nome do filme:");
    aval[i] = Number(prompt("Nova nota do filme:"));
    alert("Filme alterado: " + nomes[i] + " | Nota: " + aval[i]);
  }

  else if (opcao == "d") {
    let todos = "";
    for (let i = 0; i < 6; i++) {
      todos += i + " - " + nomes[i] + " | Nota: " + aval[i] + "\n";
    }
    alert("Todos os filmes:\n" + todos);
  }
}