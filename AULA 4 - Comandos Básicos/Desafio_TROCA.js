// Receber dois números e trocar eles de variáveis

var numero1 = prompt("Digite um número para ser trocado de lugar");
var numero2 = prompt("Digite um número para ser trocado de lugar");
alert("O 1º Número é: " +numero1);
alert("O 2º Número é: " +numero2);

var valorFixo = numero1;

alert("Os Nºs inverterão!");

numero1 = numero2;
numero2 = valorFixo;

alert("O 1º Número é: " +numero1);
alert("O 2º Número é: " +numero2);