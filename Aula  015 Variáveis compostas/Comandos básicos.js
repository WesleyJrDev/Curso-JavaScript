let num = [18,20,3000,400,56,06]

//redefinir um elemento
num[0] = 11

//acrescentar mais um ultimo elemento com um valor.
num.push (10)



//saber quantos elementos tem no Arrey usando vetor.length
console.log (`Dentro do vetor "num" tem ${num.length} elementos`)

//Buscar um determinado valor dentro do Arrey usando vetor.indexOf()
console.log (`o numero 11 está na posição ${num.indexOf(11)}`)

//organizar os valores em order crescente, levando em conta a primeira unidade 
num.sort ()

console.log(num)
