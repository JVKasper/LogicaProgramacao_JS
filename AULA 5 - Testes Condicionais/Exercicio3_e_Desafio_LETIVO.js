// Usuário vai digitar uma nota de 0 a 10, tu vai testar a nota e dizer se foi aprovado ou não. Aprovado > 7.

var nota1;
var nota2;
var nota3;
do{
	nota1 = parseInt(prompt("Digite uma nota de 0 a 10.")); 
  if(nota1 < 0 || nota1 > 10){
  	alert("Nota inválida.");
  }
}while(nota1 < 0 || nota1 > 10);

do{
	nota2 = parseInt(prompt("Digite outra nota de 0 a 10.")); 
  if(nota2 < 0 || nota2 > 10){
  	alert("Nota inválida.");
  }
}while(nota2 < 0 || nota2 > 10);

do{
	nota3 = parseInt(prompt("Digite mais uma nota de 0 a 10.")); 
  if(nota3 < 0 || nota3 > 10){
  	alert("Nota inválida.");
  }
}while(nota3 < 0 || nota3 > 10);

var media = (nota1 + nota2 + nota3) / 3;

if(media > 7){
	alert("Você foi aprovado");
}else{
	alert("Você foi reprovado");
}
