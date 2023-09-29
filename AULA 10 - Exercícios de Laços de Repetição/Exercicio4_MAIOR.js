var aux = 0;
var n1 = parseInt(prompt("Digite o 1º número: "));

for(var i = 1; i < 5; i++){
  if(n1 > aux) {
  	aux = parseInt(prompt("Digite o " + (i+1) + "º número: "));
  }else{
  	n1 = parseInt(prompt("Digite o " + (i+1) + "º número: "));
  }
}

if(n1 > aux){
	alert("O maior número é " +n1);
}else if(n1 == aux){
	alert("Os números são iguais");
}else{
	alert("O maior número é " +aux);
}