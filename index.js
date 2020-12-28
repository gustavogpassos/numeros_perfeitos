function perfeitos(){
    var limite = document.getElementById('limite').value;
    if(limite == 'undefined'){
        window.alert("Numero invalido");
    }else{
        var eleitos = [];
        var perfeitos = [];
        var soma = 0;
        for(var i = 1; i<limite; i++){
            console.log('obtendo os divisores de '+i);
            soma = 0;
            var somafinal = 0;
            for(var j = 1; j<= i; j++){
                var resto = i%j;
                if(resto == 0 && j!=i){
                    eleitos.push(j);
                }
            } 
                       
            eleitos.map(function(num){
                somafinal = somafinal + num;
            });
            if(somafinal == i){
                console.log('o numero '+i+' é perfeito');
                perfeitos.push(i);
            }else{
                console.log('o numero '+i+' nao é perfeito');
            }
            while(eleitos.length) {
                eleitos.pop();
             }
        }
        var textoFinal = 'os numeros perfeitos de 0 a '+limite+' são ';
        perfeitos.forEach(function(bite){
            textoFinal += bite+', ';
        });
        window.alert(textoFinal);
    }
}