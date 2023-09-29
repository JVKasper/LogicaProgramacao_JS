var arrayQualquer = function(){
	var array = [];
  var quantidade = parseInt(prompt("Digite a quantidade de números que vai na array: "));
  for(var i = 0; i < quantidade; i++ ){
  	array.push(parseInt(Math.random()*100));
    alert(array);
  }
}
arrayQualquer();