var n1 = parseInt(prompt("Digite o 1º número"));
var n2 = parseInt(prompt("Digite o 2º número"));
var n3 = parseInt(prompt("Digite o 3º número"));
var iguais = 0;

//Maior número
if (n1 > n2 && n1 > n3) {
  alert("O 1º número é o maior: " + n1);
} else if (n2 > n1 && n2 > n3) {
  alert("O 2º número é o maior: " + n2);
} else if (n3 > n2 && n3 > n1) {
  alert("O 3º número é o maior: " + n3);
} else {
  alert("Todos os números são iguais: " + n1);
  iguais++;
}

//Menor número
if (iguais == 0) {
  if (n1 < n2 && n1 < n3) {
    alert("O 1º número é o menor: " + n1);
  } else if (n2 < n1 && n2 < n3) {
    alert("O 2º número é o menor: " + n2);
  } else {
    alert("O 3º número é o menor: " + n3);
  }
}