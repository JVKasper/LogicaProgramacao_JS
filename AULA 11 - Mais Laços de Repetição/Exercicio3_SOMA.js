var numero = parseInt(prompt("Digite o 1º número: "));
var aux = null;

for(var i = 2; i <= 5; i++){
	aux = parseInt(prompt("Digite o " +i+ "º número: "));
	numero+= aux;
}
alert("A soma dos números é: " +numero);