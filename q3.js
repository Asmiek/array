let fita = [];
for (let i = 0; i < 10; i++) {
  fita[i] = prompt("Digite base RNA " + (i+1) + " (A, U, C ou G):");
}

let comp = [];
for (let i = 0; i < 10; i++) {
  if (fita[i] == "A") comp[i] = "U";
  else if (fita[i] == "U") comp[i] = "A";
  else if (fita[i] == "C") comp[i] = "G";
  else if (fita[i] == "G") comp[i] = "C";
}
alert("Original: " + fita.join(" ") + "\nComplementar: " + comp.join(" "));