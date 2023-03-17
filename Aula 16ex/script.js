let num = document.querySelector ('input#fnum')
let lista = document.querySelector ('select#flista')
let res = document.querySelector ('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if(isNumero(num.value) && !inLista(num.value, valores)) { 

    valores.push (num.value)
    let item = document.createElement ('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild (item)
    

}else {
    window.alert ('Valor inválido ou já encontrado na lista.')
}
}



function finalizar(){


    let max = Math.max.apply (null,valores)
    let min = Math.min.apply (null, valores)
    let soma = 0
    
    for (var c in valores ) {
        soma+= valores[c]
    }


    res.innerHTML += `<p> Ao todo temos ${valores.length} números cadastrados </P>`
    res.innerHTML += `<p> O maior valor inserido foi ${max}</P>`
    res.innerHTML +=`<p> O menor valor inserido foi ${min}</P>`
    res.innerHTML += `A soma de todos os numeros é ${soma}`

    }







