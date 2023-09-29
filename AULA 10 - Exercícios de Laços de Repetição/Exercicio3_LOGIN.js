
var senhaDecidida = 180488;
var loginDecidido = "Aline PR";
var cont = 0;

do {
  var loginPedido = prompt("Digite o Login:");
  var senhaPedida = parseInt(prompt("Digite a Senha:"));
  if (senhaPedida != senhaDecidida || loginPedido != loginDecidido) {
    alert("Login ou Senha inválidos");
    cont++;
    if (cont == 3) {
      alert("Limite de Chances Atingidos");
      cont = 3;
    }
  }
  if (senhaPedida == senhaDecidida && loginPedido == loginDecidido) {
    alert("Logado com Sucesso");
    cont = 3;
  }

} while (cont < 3);