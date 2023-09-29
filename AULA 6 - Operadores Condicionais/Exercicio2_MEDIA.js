// baseado no exercicio 3 da última aula, se caso a nota for exatamente igual a 7, imprimir na tela aprovado na média.

var nota1;
var nota2;
var nota3;
do{
	nota1 = parseInt(prompt("Digite a 1ª nota de 0 a 10.")); 
  if(nota1 < 0 || nota1 > 10){
  	alert("Nota inválida.");
  }
}while(nota1 < 0 || nota1 > 10);

do{
	nota2 = parseInt(prompt("Digite a 2ª nota de 0 a 10.")); 
  if(nota2 < 0 || nota2 > 10){
  	alert("Nota inválida.");
  }
}while(nota2 < 0 || nota2 > 10);

do{
	nota3 = parseInt(prompt("Digite a 3ª nota de 0 a 10.")); 
  if(nota3 < 0 || nota3 > 10){
  	alert("Nota inválida.");
  }
}while(nota3 < 0 || nota3 > 10);

var media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
	alert("Você foi aprovado acima da média" +
  			"\nMédia: " + Math.round(media));
}else if(media == 7) {
	alert("Você foi aprovado na média." +
  			"\nMédia: " + Math.round(media));
}else{
	alert("Você foi reprovado" +
  			"\nMédia: " + Math.round(media));
}