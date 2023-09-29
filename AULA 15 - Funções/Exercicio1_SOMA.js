var soma = function(){
	var valor = 0;
	for(var i = 1; i <= 2; i++){
 	 var numero = parseInt(prompt("Digite um número: "));
   valor += numero;
  }
  alert(valor);
}

soma();