var nota;

do{
	nota = parseInt(prompt("Digite a sua nota de 0 a 10.")); 
  if(nota < 0 || nota > 10){
  	alert("Nota inválida.")
    }
}while(nota < 0 || nota > 10);

if(nota > 7){
	alert("Você foi aprovado");
}else{
	alert("Você foi reprovado");
}