let slots = []; 
for (let i = 0; i < 5; i++) {
}

let opcao = "";
while (opcao != "4") {
  for (let i = 0; i < 5; i++) {
    if (slots[i] != null) {
      slots[i]--;
      if (slots[i] <= 0) {
        slots[i] = null; 
      }
    }
  }

  opcao = prompt(
    "Menu:\n" +
    "1) Status do servidor\n" +
    "2) Requisitar slot\n" +
    "3) Liberar slot manualmente\n" +
    "4) Encerrar"
  );

  if (opcao == "1") {
    let status = "";
    for (let i = 0; i < 5; i++) {
      if (slots[i] == null) {
        status += "Slot " + i + ": Livre\n";
      } else {
        status += "Slot " + i + ": Ocupado (resta " + slots[i] + " tempo)\n";
      }
    }
    alert(status);
  }

  else if (opcao == "2") {
    // requisitar slot
    let livre = -1;
    for (let i = 0; i < 5; i++) {
      if (slots[i] == null) {
        livre = i;
        break;
      }
    }
    if (livre != -1) {
      slots[livre] = 2; // ocupa por 2 unidades de tempo
      alert("Requisição alocada no slot " + livre);
    } else {
      alert("Nenhum slot disponível.");
    }
  }

  else if (opcao == "3") {
    // liberar slot manualmente
    let num = Number(prompt("Digite o número do slot (0 a 4):"));
    if (num >= 0 && num < 5 && slots[num] != null) {
      slots[num] = null;
      alert("Slot " + num + " liberado manualmente.");
    } else {
      alert("Slot inválido ou já está livre.");
    }
  }

  else if (opcao == "4") {
    alert("Encerrando o programa...");
  }

  else {
    alert("Opção inválida!");
  }
}
