// Baseado no primeiro exercicio da ultima aula, inverter o teste codicional para testar primeiramente se o número é zero

var numeroEscolhido = parseInt(prompt("Digite um Nº"));

if(numeroEscolhido == 0) {
	alert("O Nº " +numeroEscolhido+ " é nulo");
}else if(numeroEscolhido > 0) {
	alert("O Nº " +numeroEscolhido+ " é positivo");
}else{
	alert("O Nº " +numeroEscolhido+ " é negativo");
}