var formaArray = function(quantidade) {
    var array = [];
    for (var i = 0; i < quantidade; i++) {
      var aleatorio = parseInt(Math.random() * 100);
      array.push(aleatorio);
    }
    return array;
  }
  
  var calcularMedia = function(array){
      var soma = 0;
    var cont = 0;
    for(var i = 0; i < array.length; i++){
        soma += array[i];
      cont++
    }
    var media = soma / cont;
    return Math.round(media);
  }
  
  var vetor = formaArray(parseInt(prompt("Digite quantos elementos o vetor vai ter")));
  var mediaVetor = calcularMedia(vetor);
  alert("Vetor: " +vetor+ "\n\nMédia dos números do vetor: " +mediaVetor);