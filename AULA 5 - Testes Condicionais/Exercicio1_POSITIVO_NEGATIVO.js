// O usuário vai digitar um número e vai testar 
//se esse número é positivo ou negativo;

var numeroEscolhido = parseInt(prompt("Digite um Nº"));

if(numeroEscolhido < 0) {
	alert("O Nº " +numeroEscolhido+ " é negativo");
}else if(numeroEscolhido > 0) {
	alert("O Nº " +numeroEscolhido+ " é positivo");
}else{
	alert("O Nº " +numeroEscolhido+ " é nulo");
}