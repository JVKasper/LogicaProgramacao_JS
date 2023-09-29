//exercicio1:
var vetor = [1,2,3,4,5];
var soma = 0;
var resultado = "";
var resultado2 = "";

//exercicio2:
alert("O valor do terceiro elemento é: " + vetor[2]);

//exercicio3 e exercicio6:
for(var i = 0; i <= 4; i++){
	soma+=vetor[i];
  if(i != 4){
  	resultado += vetor[i] + " - ";
  }else{
  	resultado += vetor[i];
  }
}
alert("Os valores do vetor são: " +resultado);

//exercicio4:
alert("A soma dos valores do vetor é: " +soma);

//exercicio5 e 6:
vetor[2] = 8;
for(var i = 0; i <= 4; i++){
  if(i != 4){
  	resultado2 += vetor[i] + " - ";
  }else{
  	resultado2 += vetor[i];
  }
}
alert("Os novos valores do vetor são: " +resultado2);