var formaArray = function(quantidade) {
    var array = [];
    for (var i = 0; i < quantidade; i++) {
      var aleatorio = parseInt(Math.random() * 100);
      array.push(aleatorio);
    }
    return array;
  }
  
  var removerElemento = function(array, elemento){
  var novoVetor = [];
      for(var i = 0; i < array.length; i++){
        if(array[i] !== elemento){
          novoVetor.push(array[i]);
      }
    }
    return novoVetor;
  }
  
  var vetor = formaArray(parseInt(prompt("Quantidade de elementos dentro de uma array: ")));
  var elemento = parseInt(prompt("A array é " +vetor+ "\n\nQual número você quer excluir?"));
  var arraySemElemento = removerElemento(vetor, elemento);
  alert("Antiga Array: " +vetor+ "\n\nNova Array: " +arraySemElemento);