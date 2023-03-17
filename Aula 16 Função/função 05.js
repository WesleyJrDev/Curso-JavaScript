// RECURSIVIDADE

function fatorial(n) {

    if (n == 1) {
        console.log(`o N do IF é ${n}`)
        console.log (`fatorial de N no if é ${fatorial(n)}`)
        return 1
    }else {
        console.log(`o N do ELSE é ${n}`)
        console.log (`fatorial de N no else é ${fatorial(n)}`)
    return n * fatorial (n-1)
}

}
console.log (`fatorial de N é ${fatorial(n)}`)
let x = 5 

console.log (`O fatorial de ${x} é ${fatorial(x)}`)