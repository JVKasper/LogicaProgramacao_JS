var soma = function(numero1, numero2){
	numero1+=numero2;
  return numero1;
}
var numeroPedido1 = parseInt(prompt("Digite um número"));
var numeroPedido2 = parseInt(prompt("Digite um número"));

var resultado = soma(numeroPedido1, numeroPedido2);
alert(numeroPedido1+ " + " +numeroPedido2+ " = " + resultado);