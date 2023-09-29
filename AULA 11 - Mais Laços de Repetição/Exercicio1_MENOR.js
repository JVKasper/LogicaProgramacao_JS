var numero = parseInt(prompt("Digite o 1º número: "));
var aux = numero;

for(var i = 2; i <= 5; i ++){
	if(numero < aux ){
  	aux = parseInt(prompt("Digite o " +i+ "º número: "));
  }else{
  	numero = parseInt(prompt("Digite o " +i+ "º número: "));
  }
}
if(numero < aux){
	alert("O menor número é: " +numero);
}else if(numero == aux){
	alert("Os números são iguais");
}else{
	alert("O menor número é: " +aux);
}