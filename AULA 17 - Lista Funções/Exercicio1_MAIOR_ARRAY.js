var formaArray = function(quantidade) {
    var array = [];
    for (var i = 0; i < quantidade; i++) {
      var aleatorio = parseInt(Math.random() * 100);
      array.push(aleatorio);
    }
    return array;
  }
  
  var maiorNumero = function(array) {
    var maior = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == 0) {
        maior = array[0];
      } else if (array[i] > maior) {
        maior = array[i];
      } else {
        maior = maior;
      }
    }
    return maior;
  }
  
  var array = formaArray(parseInt(prompt("Digite a quantidade de elementos na array")));
  var maior = maiorNumero(array);
  
  alert("A array é: " +array);
  alert("O maior número da array é " +maior);