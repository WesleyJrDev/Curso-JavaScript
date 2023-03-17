// RECURSIVIDADE


function fatorial(n) {

    console.log(`O n antes do IF é ${n}`)

    if (n == 1) {
        console.log(`O n do if é ${n}`)
        return 1


    } else {
        console.log(`O n do else é ${n}`)
        return n * fatorial(n - 1)

    }

}
let x = 5
console.log(`O fatorial de ${x} é ${fatorial(x)} `)

//5!= 5*4*3*2*1 = 120
//5! = 5*4! = 120
// n! = n*(n-1)!
//1!=1