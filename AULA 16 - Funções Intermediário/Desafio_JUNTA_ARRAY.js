var formaArray = function(quantidade) {
    var array = [];
    for (var i = 0; i < quantidade; i++) {
      var aleatorio = parseInt(Math.random() * 100);
      array.push(aleatorio);
    }
    return array;
  }
  
  do{
      var quantidade1 = parseInt(prompt("Digite o tamanho do 1º array"));
    if(quantidade1 < 0){
        alert("Valor Inválido!!");
    }
  }while(quantidade1 < 0);
  
  do{
      var quantidade2 = parseInt(prompt("Digite o tamanho do 2º array"));
    if(quantidade2 < 0){
        alert("Valor Inválido!!");
    }
  }while(quantidade2 < 0);
  
  var array1 = formaArray(quantidade1);
  var array2 = formaArray(quantidade2);
  var array3 = [];
  
  for(var i = 0; i < array1.length; i++){
      array3.push(array1[i]);
  }
  
  for(var i = 0; i < array2.length; i++){
      array3.push(array2[i]);
  }
  alert("1º Array:  " +array1);
  alert("2º Array:  " +array2);
  alert("3º Array (união dos dois primeiros):  " +array3);