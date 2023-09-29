var array = [];

for(var i = 1; i <= 2; i++){
	var numero = parseInt(prompt("Digite o " +i+ "º número"));
  array.push(numero);
}
if(array[0] > array[1]){
	var auxiliar = array[0];
  array[0] = array[1];
  array[1] = auxiliar;
}
alert(array);