function Conferir() {
    var agoraHora = new Date()
    var hora = agoraHora.getHours()
    var agoraMinutos = new Date()
    var minutos = agoraMinutos.getMinutes()
    var mudarTexto = document.getElementById('saudações')
    if (hora < 12){
        mudarTexto.innerHTML = `Bom dia, são ${hora}:${minutos} horas`
        mudarCorDia()
    } else if (hora <= 18) {
        mudarTexto.innerHTML = `Boa tarde, são exatamente ${hora}:${minutos} horas`
        mudarCorTarde()
    } else {
        mudarTexto.innerHTML = `Boa noite, são exatamente ${hora}:${minutos} horas`
        mudarTexto.style.color = 'white'
        mudarCorNoite()

    }
}
function mudarCorDia() {
    var mudarCor = document.getElementById('saudações')
    var mudarCorBack = document.getElementById('trocar')
    mudarCor.style.background = 'orange'
    mudarCorBack.style.background = 'orange'
    
}
function mudarCorTarde() {
    var mudarCor = document.getElementById('saudações')
    var mudarCorBack = document.getElementById('trocar')
    mudarCor.style.background = 'blue'
    mudarCorBack.style.background = 'blue'
}
function mudarCorNoite() {
    var mudarCor = document.getElementById('saudações')
    var mudarCorBack = document.getElementById('trocar')
    mudarCor.style.background = 'black'
    mudarCorBack.style.background = 'black'
}