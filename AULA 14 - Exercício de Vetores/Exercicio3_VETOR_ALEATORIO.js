var tamanho = parseInt(prompt("Digite o tamanho do vetor: "));
var vetor = [];

for(var i = 0; i < tamanho; i++){
	var aleatorio = parseInt(Math.random()*10);
  	vetor.push(aleatorio);
}
alert("Números que vão preencher o vetor: " +vetor);