let sangues = [];
for (let i = 0; i < 10; i++) {
  sangues[i] = prompt("Digite o tipo sanguíneo da pessoa " + (i+1) + ":");
}

let textoTipos = "";
for (let i = 0; i < 10; i++) {
  textoTipos += "Pessoa " + i + ": " + sangues[i] + "\n";
}
alert(textoTipos);