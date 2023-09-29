var repetirString = function(string, numero){
    var novaString = "";
        for(var i = 0; i < numero ; i++){
          novaString += string
      }
      return novaString
    }
    
    var palavra = prompt("Digite uma palavra");
    var quantidade = parseInt(prompt("Digite a quantidade de vezes que ela irá repetir"));
    var palavraRepetida = repetirString(palavra, quantidade);
    alert("Antiga String: " +palavra+ "\n\nNova String: " +palavraRepetida);