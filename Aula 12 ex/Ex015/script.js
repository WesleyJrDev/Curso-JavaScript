function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
            
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //menino
                img.setAttribute ('src', 'rmenino.jpg')
            }else if (idade > 12 && idade <= 21) {
                //moço
                img.setAttribute ('src', 'rmoço.jpg')
            }else if (idade <= 64) {
                //h Adulto
                img.setAttribute ('src', 'rhomem.jpg')
            }else {
                //idoso
                img.setAttribute ('src', 'rridoso.jpg')
            }            

        } else if (fsex[1].checked) {
            gênero = 'Mulher'  
            if (idade >= 0 && idade <= 12) {
                //menina
                img.setAttribute ('src', 'rmenina.jpg')
            }else if (idade > 12 && idade <= 21) {
                //moça
                img.setAttribute ('src', 'rmoça.jpg')
            }else if ( idade <= 64) {
                //m Adulta
                img.setAttribute ('src', 'rmulher.jpg')
            }else {
                //idosa
                img.setAttribute ('src', 'ridosa.jpg')
            }

        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild (img)
        
    }
}
