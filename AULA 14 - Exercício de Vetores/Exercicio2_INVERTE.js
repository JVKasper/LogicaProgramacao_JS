var auxiliar = "";
var vetor = [1, 2, 3, 4, 5, 6, 7, 8];

alert("O vetor não invertido é " + vetor);

for (var i = (vetor.length - 1); i >= 0; i--) {
  if (i != 0) {
    auxiliar += vetor[i] + ",";
  } else {
    auxiliar += vetor[i];
  }
}
alert("O vetor invertido é " + auxiliar);