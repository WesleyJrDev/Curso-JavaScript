let num = [1, 32, 12, 490, 512]

// for (var pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

// Maneira simplificada

for (let pos in num) {
    console.log(`Dentro do vetor "num", a posição ${pos} tem o valor ${num[pos]}`)
}

//Procurar determinado valor = Comando .indexOf() 
let valorprocurado = 300

let pos = num.indexOf(valorprocurado)

if (pos == -1) {
    console.log('valor não encontrado')
} else {
    console.log(`O valor ${valorprocurado} foi parar no elemento ${num.indexOf(valorprocurado)}`)
}