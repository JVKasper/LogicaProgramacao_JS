var n1 = parseInt(prompt("Digite o 1º número"));
var n2e3 = parseInt(prompt("Digite o 2º número"));

if (n1 > n2e3) { // n1 maior que o 2
  n2e3 = parseInt(prompt("Digite o 3º número"));
  if (n1 > n2e3) { // se o n1 for maior que o 3
    alert("O 1º número é o maior: " + n1);
  }else{ // se o 3 for maior que o 1 e o 2
  	alert("O 3º número é o maior: " +n2e3);
  }
}else if (n2e3 > n1) {
  n1 = n2e3;
  n2e3 = parseInt(prompt("Digite o 3º número"));
  if (n1 > n2e3) {
    alert("O 2º número é o maior: " + n1);
  }else{
  	alert("O 3º número é o maior: " +n2e3);
  }
}else if(n1 == n2e3){
	n2e3 = parseInt(prompt("Digite o 3º número"));
  if(n2e3 == n1){
  	alert("Todos os números são iguais: " +n1);
  }
 }