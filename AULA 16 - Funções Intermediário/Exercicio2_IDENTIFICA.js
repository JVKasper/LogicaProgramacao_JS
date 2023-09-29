var busca = function(array, numero) {
    return array[numero];
  }
  
  var formaArray = function(quantidade) {
    var array = [];
    for (var i = 0; i < quantidade; i++) {
      var aleatorio = parseInt(Math.random() * 100);
      array.push(aleatorio);
    }
    return array;
  }
  
  //Pergunta quantidade de elementos na array:
  do {
    var quantidadeElemento = parseInt(prompt("Digite quantos elementos terá a array"));
    if (quantidadeElemento < 0) {
      alert("Valor Inválido");
    }
  } while (quantidadeElemento < 0);
  
  var vetor = formaArray(quantidadeElemento);
  
  //Pergunta qual elemento quer ver:
  do {
    var numeroElemento = parseInt(prompt("Qual elemento do array você quer saber?"));
    if (numeroElemento >= quantidadeElemento || numeroElemento < 0) {
      alert("Valor Inválido");
    }
  } while (numeroElemento >= quantidadeElemento || numeroElemento < 0);
  
  var resposta = busca(vetor, numeroElemento);
  
  alert("O " + numeroElemento + "º elemento é " + resposta);
  alert("A array é " + vetor);  