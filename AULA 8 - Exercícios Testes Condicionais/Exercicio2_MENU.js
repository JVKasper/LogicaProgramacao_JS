// Fazer um menu com 3 itens
do {
    var menu = parseInt(prompt("Escolha um dos itens a seguir: " +
      "\n1 - Maior e Menor número entre dois itens " +
      "\n2 - Par ou Impar de um número " +
      "\n3 - Positivo ou Negativo de um número " +
      "\n0 - Sair"));
  
    if (menu == 1) {
      var n1 = parseInt(prompt("Digite o 1º número"));
      var n2 = parseInt(prompt("Digite o 2º número"));
      if (n1 > n2) {
        alert("O 1º número é o maior: " + n1);
      } else if (n1 < n2) {
        alert("O 2º número é o maior: " + n2);
      } else {
        alert("Os números são iguais");
      }
    } else if (menu == 2) {
      var n1 = parseInt(prompt("Digite um número"));
      if (n1 % 2 == 0) {
        alert("O número " + n1 + " é par");
      } else {
        alert("O número " + n1 + " é impar");
      }
    } else if (menu == 3) {
      var n1 = parseInt(prompt("Digite um número"));
      if (n1 > 0) {
        alert("O número " + n1 + " é positivo");
      } else if (n1 < 0) {
        alert("O número " + n1 + " é negativo");
      } else {
        alert("O número " + n1 + " é nulo");
      }
    } else if (menu == 0) {
      alert("Volte Sempre!");
    } else {
      alert("Opção Inválida.");
    }
  } while (menu != 0);  