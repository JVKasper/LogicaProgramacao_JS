var num1 = parseInt(prompt("Digite o 1° número "));
var num2 = parseInt(prompt("Digite o 2° número "));

if (num1 <= num2){
  while(num1 <= num2){
     alert("Número " +num1);
     num1++;
  }
}else if (num2 <= num1){
  while(num2 <= num1){
     alert("Número " +num2);
     num2++;
  }
}else{
  alert("Números são iguais");
}