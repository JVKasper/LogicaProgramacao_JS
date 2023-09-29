var pegaNumero = function(numero){
    var array = [];
       var quantidade = parseInt(prompt("Digite a quantidade de números que vai na array: "));
    for(var i = 0; i < quantidade; i++ ){
        array.push(parseInt(Math.random()*100));
     }
     
       if(numero > quantidade || numero < 0){
        alert("Não é existente esse elemento na array");
    }else{
        alert("O " + numero + "º elemento é " +array[numero]);
      alert("A array é " +array);
    }
  }		
  
  pegaNumero(3);