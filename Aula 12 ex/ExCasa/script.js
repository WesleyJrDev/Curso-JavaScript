var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
var msgm = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var bom = 0


if (hora >=0 && hora < 12 ) {
    bom = 'Bom dia'
        img.src = 'manhã.png'
        document.body.style.background = '#9cabb2'
        document.body.style.color = 'black'
        document.section.style.background = 'white'

    }else if (hora >=12 && hora<18 ) {
    bom = 'Boa tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#245371'
}else {
    bom = 'Boa noite'
        img.src = 'noite.png'
        document.body.style.background = '#000c2e'
}          

function Carregar(){
    msgm.innerHTML = `${bom}, são exatamente ${hora}h${min}m${sec}s`
}