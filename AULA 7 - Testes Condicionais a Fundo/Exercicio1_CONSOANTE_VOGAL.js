// Script que recebe uma letra e verifica se ela é uma vogal ou consoante
var letra = prompt("Digite uma letra");

if(letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U") {
	alert("Vogal");
}else{
	alert("Consoante");
}