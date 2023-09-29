// Calcular quanto de troco preciso dar para um cliente, caso ele me dê uma nota de 50 reais e o valor da conta dele for 25 reais.

var valorConta = parseInt(prompt("Qual o valor da conta?"));
var valorDinheiro = parseInt(prompt("Qual o valor que você deu?"));
var troco = valorDinheiro - valorConta;
var devendo = valorConta - valorDinheiro;

if(valorConta < valorDinheiro) {
	alert("Seu troco é R$" + troco);
  console.log("Seu troco é R$" + troco);
} else if (valorConta > valorDinheiro) {
	alert("Você não recebe troco e está devendo R$" +devendo);
  console.log("Você não recebe troco e está devendo R$" +devendo);
} else {
	alert("Você não recebe troco.");
  console.log("Você não recebe troco.");
}