function contar() {

    let ini = document.getElementById ('ini')
    let fim = document.getElementById ('fim')
    let pass = document.getElementById ('pass')
    let res = document.getElementById ('res') 
    

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length ==0){
        window.alert ('[ERRO] Faltam dados!')
    } else {
        let i = Number (ini.value)
        let f= Number (fim.value)
        let p = Number (pass.value)
        res.innerHTML = ' Contando: <br> '
        
        if (p <= 0) {
        window.alert ('Passo inválido, considerando Passo = 1')
        p = 1
        }
            
            if (i<f) {
                //Contagem crescente padrão
                for ( i; i <= f; i+=p) {
                res.innerHTML +=  `  \u{1F449} ${i} `
                }

            }else  {
                //Contagem regressiva
                for ( i; i >= f; i-=p) {
                    res.innerHTML +=  `  \u{1F449} ${i} `
                }
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
            
        
    
    





   
 
     


