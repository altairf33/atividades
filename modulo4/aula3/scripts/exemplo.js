//entrada
const valorJantar = prompt("digite o valor do jantar R$: ");
//processamento
const valorGarcom = Number(valorJantar) * 0.10;
const valorTotal = Number(valorJantar) + valorGarcom;
//saida
alert("O valor total e R$: " + valorTotal);