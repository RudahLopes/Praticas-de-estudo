function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = new Date()
    var min = minutos.getMinutes()
    //var hora = 0
    //var min = 13
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora}:${min} horas`
        img.src = 'FotoManha.png'
        document.body.style.background = '#b4e2fd'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora}:${min} horas`
        img.src = 'FotoTarde.png'
        document.body.style.background = '#fcb457'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora}:${min} horas`
        img.src = 'FotoNoite.png'
        document.body.style.background = '#045a74'
    }
}