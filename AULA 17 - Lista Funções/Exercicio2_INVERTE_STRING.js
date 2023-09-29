var inverterString = function(string) {
    var stringContrario = "";
    for (var i = (string.length - 1); i >= 0; i--) {
      stringContrario += string[i];
    }
    return stringContrario
  }
  
  var palavra = inverterString(prompt("Digite uma palavra"));
  alert("A palavra invertida é " + palavra);