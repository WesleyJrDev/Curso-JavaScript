function par_ou_impar(numero) {
    if (numero % 2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}
let res = par_ou_impar(11)

console.log(`O número é ${res}`)

// LEGENDA
// Parametro formal = numero
// Parametro real = 11
// Chamada = par_ou_impar
// Ação = if (numero % 2 == 0)
// Retorno = poderia ser PAR ou IMPAR, no caso do 11 foi IMPAR.
