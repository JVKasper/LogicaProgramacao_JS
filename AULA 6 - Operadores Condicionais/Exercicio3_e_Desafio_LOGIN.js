// receber um login e uma senha, se caso o login e a senha forem iguais "teste", imprime na tela logado, caso não, login ou senha errados

var senhaDecidida = 180488;
var loginDecidido = "Aline PR";

var loginPedido = prompt("Digite o Login:");
var senhaPedida = parseInt(prompt("Digite a Senha:"));

if(senhaPedida == senhaDecidida && loginPedido == loginDecidido){
	alert("Logado com Sucesso");
}else if (senhaPedida != senhaDecidida && loginPedido != loginDecidido){
	alert("Login e Senha Inválidos!");
}else if(senhaPedida != senhaDecidida){
	alert("Senha Inválida");
}else{
	alert("Login Inválido");
}