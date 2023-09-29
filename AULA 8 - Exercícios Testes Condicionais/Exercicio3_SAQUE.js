/* Fazer um saque de um caixa eletrônico:
	Até R$2000,00;
  Notas de: 100, 50, 20, 10, 5, 2, 1
  Entregar o maior número de notas grandes
*/

var notas100, notas50, notas20, notas10, notas5, notas2, notas1;

//Validação do Valor de Saque:
do{
	var valorDeSaque = parseInt(prompt("Digite um valor de saque \nOBS: Valor máximo: R$2000,00"));
  if(valorDeSaque > 2000){
  	alert("Valor Ultrapassou R$2000,00!");
  }else if(valorDeSaque < 0){
  	alert("Valor não pode ser negativo!");
  }
}while(valorDeSaque > 2000 || valorDeSaque < 0);

//Processamento
notas100 = parseInt(valorDeSaque / 100);
notas50 =  parseInt(valorDeSaque % 100 / 50);
notas20 =  parseInt(valorDeSaque % 100 % 50 / 20);
notas10 = parseInt(valorDeSaque % 100 % 50 % 20 / 10);
notas5 = parseInt(valorDeSaque % 100 % 50 % 20 % 10 / 5);
notas2 = parseInt(valorDeSaque % 100 % 50 % 20 % 10 % 5 / 2);
notas1 = parseInt(valorDeSaque % 100 % 50 % 20 % 10 % 5 % 2 / 1);

//Saída de Dados
alert("Notas de 100: " +notas100+ 
			"\nNotas de 50: " +notas50+
      "\nNotas de 20: " +notas20+
      "\nNotas de 10: " +notas10+
      "\nNotas de 5: " +notas5+
      "\nNotas de 2: " +notas2+
      "\nNotas de 1: " +notas1);