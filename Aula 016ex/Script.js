let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = []

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        res.innerHTML = ''
        valores.unshift(num.value)
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        lista.appendChild(item)

    } else {
        window.alert('Valor fora do limite ou repetido, tente novamente!')
    }

    num.value = ''
    num.focus()
}

function isNum(n) {
    if ((Number(n)) >= 1 && (Number(n)) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function verificar() {

    if (valores.length == 0) {

        window.alert('Adicionar valores antes de verificar')

    } else {
        // let soma = 0
        // for (let i = 0; i < valores.length; i++) {
        //     soma += Number(valores[i])
        // }

        //REDUCE
        soma = valores.reduce(function (soma, i) {
            return Number(soma) + Number(i);
        });

        let quantidade = valores.length
        let media = soma / quantidade
        let max = Math.max(...valores)
        let min = Math.min(...valores)


        res.innerHTML = `<P>Foram adicionados ${quantidade} elementos <p/>`
        res.innerHTML += `<P>Sendo o maior número enviado: ${max}<p/>`
        res.innerHTML += `<P>E o menor número enviado: ${min}<p/>`
        res.innerHTML += `<P>A soma de todos os valores adicionados é: ${soma}<p/>`
        res.innerHTML += `<P>A média dos valores adicionados é: ${media}<p/>`
    }
    
}






