

function perfeitos(){
    var limite = document.getElementById('limite').value;

    if(limite == 'undefined'){
        window.alert("Numero invalido");
    }else{
        var eleitos = [];
        var perfeitos = [];
        var soma = 0;
        //console.log('comecei');
        //console.log(limite);
        for(var i = 1; i<limite; i++){
            console.log('obtendo os divisores de '+i);
            soma = 0;
            var somafinal = 0;
            for(var j = 1; j<= i; j++){
                //console.log(j);
                var resto = i%j;
/*
                while(resto > 0){
                    resto = resto%j;
                    console.log(resto);
                }*/
                //console.log(i%j);
                //console.log('o resto da divisao de ' +i+ ' por ' + j + ' e ' + resto);

                if(resto == 0 && j!=i){
                    //console.log('adicionando ' + j + ' aos eleitos');
                    eleitos.push(j);
                }

                //resto = 0;
            }

            
            eleitos.map(function(num){
                somafinal = somafinal + num;
                //console.log(num);
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