var ativaFibonacci = function() {
    var numero = parseInt(prompt("Digite um número"));
    var fibonacci = [];
  
    for (var i = 0; i < numero; i++) {
      if (i == 0 || i == 1) {
        fibonacci.push(1);
      } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
      }
    }
    alert(fibonacci);
  }
  ativaFibonacci();  