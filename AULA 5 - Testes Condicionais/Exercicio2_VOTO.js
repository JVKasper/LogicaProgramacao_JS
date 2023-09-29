// Usuário vai digitar a idade e tu irá verificar se a pessoas poderá votar, 16 anos pode e menor que 16 não

var idade = parseInt(prompt("Digite sua idade"));

if(idade >= 16){
	alert("Você pode votar.");
}else{
	alert("Você não pode votar.");
}