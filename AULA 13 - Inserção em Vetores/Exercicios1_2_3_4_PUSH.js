// exercicio1 e exercicio2:
var vetor1 = [];

for (var i = 0; i < 4; i++) {
  var numero = parseInt(prompt("Digite o " + (i + 1) + "º número"));
  vetor1.push(numero);
  alert(vetor1[i]);
}

//exercicio3:
var vetor2 = [6, 7, 8, 9, 10];

//exercicio4:
var vetor3 = [];

for (i = 0; i < vetor1.length; i++) {
  vetor3.push(vetor1[i]);
  alert(vetor3);
  if (vetor3.length >= vetor1.length) {
    for (i = 0; i < vetor2.length; i++) {
      vetor3.push(vetor2[i]);
      alert(vetor3);
    }
  }
}