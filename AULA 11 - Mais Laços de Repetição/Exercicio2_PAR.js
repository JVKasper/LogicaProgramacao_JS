var acum = "";

for(var i = 20; i >= 1; i--){
	if(i%2 == 0 && i != 2){
  	acum+=i + " - ";
  }else if(i == 2){
  	acum += 2;
  }
}
alert(acum);