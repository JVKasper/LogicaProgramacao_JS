// Exercicio das maçãs

var macas = parseInt(prompt("Quantas maçãs você comprou?"));
var valor;

if(macas < 10){
	valor = macas * 0.30; 
  alert("O valor das "  +macas+ " maçãs é R$ " +valor);
}else{
	valor = macas *0.20;
  alert("O valor das " +macas+ " maçãs é R$ " +valor);
}