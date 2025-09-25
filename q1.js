let preco = [];
for (let i = 0; i < 5; i++) {
  preco[i] = Number(prompt("Digite o preço dos produtos" + (i+1) + ":"));
}

let maior = preco[0];
let indiceMaior = 0;
for (let i = 1; i < 5; i++) {
  if (preco[i] > maior) {
    maior = preco[i];
    indiceMaior = i;
  }
}
alert("Produto mais caro: índice " + indiceMaior + " | preço " + maior);