var calcularFatorial = function(numero) {
    for (var i = numero; i > 0; i--) {
      if (i == numero) {
        numero = numero;
      } else {
        numero *= (i);
      }
    }
    return numero;
  }
  
  var numero = parseInt(prompt("Digite um número para ser fatoriado"));
  var fatorial = calcularFatorial(numero);
  alert(numero+ "!" + " = " +fatorial);