var numero = parseInt(prompt("Digite um número"));
var array = [];

for(var i = 0; i < numero; i++){
	if(i == 0 || i == 1){
    array.push(1);
  }else{
    array.push(array[i-1] + array[i-2]);
  }
}
alert(array);