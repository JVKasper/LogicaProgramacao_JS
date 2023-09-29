var numeros = "";
for (var i = 1; i <= 20;i++) {
   numeros += i;
   if(i < 20){
      numeros += " - ";
   }
}
alert(numeros);