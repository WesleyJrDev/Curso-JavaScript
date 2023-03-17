function calcular() {
    var num = document.getElementById ('num')
    var tab = document.getElementById ('seltab')
    var atab = document.getElementById ('atab')
    var erro = document.getElementById ('erro')

    if (num.value.length == 0) {

        window.alert ('Por favor, digite um número!')

    }else {
        var n = Number (num.value)
        tab.innerHTML= ''
        

    for (var c = 1; c<=10; c++){
        var r = n * c

        atab.innerHTML = `A tabuada do ${n} é: `
   
        let item = document.createElement ('option')
        item.text = `${n} X ${c} = ${r}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    }
}