// Recebe um número e testa se ele é par ou impar

var numero = parseInt(prompt("Digite um número"));

if(numero%2 == 0){
	alert("O número " +numero+ " é par");
}else{
	alert("O número " +numero+ " é ímpar");
}