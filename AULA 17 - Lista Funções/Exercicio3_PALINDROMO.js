var inverterString = function(string) {
  var stringContrario = "";
  for (var i = (string.length - 1); i >= 0; i--) {
    stringContrario += string[i];
  }
  return stringContrario
}

var verificarPalindromo = function(string, invertida) {
  var cont = 0;
  var palindromo;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == invertida[i]) {
      cont++
    }
  }
  if (cont == string.length) {
    palindromo = "É um palindromo"
  } else {
    palindromo = "Não é um palindromo"
  }
  return palindromo
}

var palavra = prompt("Digite uma palavra");
var palavraInvertida = inverterString(palavra);
var palindromo = verificarPalindromo(palavra, palavraInvertida);

alert("A palavra invertida é " + palavraInvertida)
alert(palindromo);