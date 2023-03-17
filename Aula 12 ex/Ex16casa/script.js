function verificar() {
    var nome = document.getElementById ('txtfnome')
    var gen = document.getElementsByName ('fgen')
    var res = document.querySelector ('div#res')
    var espec = ''
    var nas = document.getElementById ('txtanonas')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number (nas.value)

    if (nas.value.length == 0 || nas > ano) {
    window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else 
    var img = document.createElement ('img')
    img.setAttribute ('id', 'foto')


    if (gen[0].checked){
        document.body.style.background = 'blue' 
        if (idade <=12){
        espec = 'um menino'
        img.setAttribute ('src', 'rmenino.jpg')  
        }else if (idade <=21){
        espec = 'um rapaz'
        img.setAttribute ('src', 'rmoço.jpg')
        }else if (idade <=64){
        espec = 'um homem'
        img.setAttribute ('src', 'rhomem.jpg')
        }else{
        espec = 'um idoso'
        img.setAttribute ('src', 'rridoso.jpg') 
        }

    }else if (gen[1].checked){
        document.body.style.background = 'pink'
        if (idade <=12){
        espec = 'uma menina'
        img.setAttribute ('src', 'rmenina.jpg')
        }else if (idade <=21){
        espec = 'uma moça'
        img.setAttribute ('src', 'rmoça.jpg')
        }else if (idade <=64){
        espec = 'uma mulher'
        img.setAttribute ('src', 'rmulher.jpg')
        }else{
        espec = 'uma idosa'
        img.setAttribute ('src', 'ridosa.jpg')
        }

    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Olá ${nome.value} você é ${espec} de ${idade} anos`
    res.appendChild (img)

    }
