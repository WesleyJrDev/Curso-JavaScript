let num = [1, 23, 32, 340, 540]

//Forma simples
console.log (num)

//Forma persolanizada

// for (pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }


//Forma personalizada SIMPLIFICADA

for (let pos in num) {
    console.log (`Dentro do vetor "NUM", a posição ${pos} tem o valor ${num[pos]}`)
}

//Buscar valor de forma personalizada

let valorprocurado = 1

let pos = num.indexOf(valorprocurado)

if (pos == -1) {
    console.log ('valor não encontrado')
}else {
    console.log (` O ${valorprocurado} foi parar no elemento ${num.indexOf(valorprocurado)}`)
}