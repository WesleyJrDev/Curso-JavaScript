// Exemplo de função para mostrar o fatorial de um número.
// 5! = 5*4*3*2*1 = 120

function fatorial(n) {
    let fat = 1 //obs: está fora do FOR

    for (c = n; c > 1; c--) {
        fat = fat * c
    }
    return fat
}

console.log(fatorial(5))