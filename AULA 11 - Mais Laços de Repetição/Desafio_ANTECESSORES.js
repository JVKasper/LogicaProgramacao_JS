var numero = parseInt(prompt("Digite um número: "));
var aux = (numero - 1) + " | ";

for (var i = 2; i <= 5; i++) {
	numero = parseInt(prompt("Digite outro número: "));
  if(i != 5){
  	aux += (numero - 1) + " | ";
  }else{
  	aux += (numero - 1);
  }
}
alert("Os antecessores são: " + aux);