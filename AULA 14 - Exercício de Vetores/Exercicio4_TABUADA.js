var resposta;
var acum = "";
var array = [];

do {
  var numero = parseInt(prompt("Digite um número de 1 a 10"));
  if (numero < 1 || numero > 10) {
		alert("Número Inválido!");
  }
}while(numero < 1 || numero > 10);

for(var i = 1; i<= 10; i++){
	resposta = numero * i;
  array.push(numero+" * "+ i +" = " +resposta+"\n");
 }
alert(array);