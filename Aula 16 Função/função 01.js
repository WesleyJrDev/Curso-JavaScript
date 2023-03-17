function par_ou_impar(numero)  {
	if (numero % 2 ==0) {
		return 'Par'
	}else {
		return 'Impar'
	}
}

let res = par_ou_impar(11)

console.log (`O numero é ${res}`)

//LEGENDA
// Paramentro formal = numero
// Parametro real = 11
// Chamada = par_ou_impar
// Ação = if (numero % 2 == 0)
// Retorno = 'Par' ou 'Impar', no caso do 11 'Impar' 