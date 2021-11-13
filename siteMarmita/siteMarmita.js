function confirmar () {
    if (dadosCorretos() == true) {
        let av = document.getElementById("txtAv").value
        let num = document.getElementById("txtNum").value
        let comp = document.getElementById("txtComp").value
        let cont = document.getElementById("txtCont").value
        if (dadosComida() == true) {
            let rad1 = document.querySelector('input[name="rad1"]:checked').value
            let rad2 = document.querySelector('input[name="rad2"]:checked').value
            let rad3 = document.querySelector('input[name="rad3"]:checked').value
            let rad4 = document.querySelector('input[name="rad4"]:checked').value
            let rad5 = document.querySelector('input[name="rad5"]:checked').value
            var msg = document.getElementById('msg')
            if (comp.length < 1) {
                msg.innerHTML = `Você pediu ${rad1}, ${rad2.toLowerCase()}, ${rad3.toLowerCase()}, ${rad4.toLowerCase()} e ${rad5}. Endereço para entrega: ${av}, n${num}.\n
                            celular para contato: ${cont}`
            } else {
                var msg = document.getElementById('msg')
                msg.innerHTML = `Você pediu ${rad1}, ${rad2.toLowerCase()}, ${rad3.toLowerCase()}, ${rad4.toLowerCase()} e ${rad5}. Endereço para entrega: ${av}, nº${num}, ${comp}.\n
                            celular para contato: ${cont}`
            }
        } else {
            window.alert (`[ERRO] Complete todas as informações`)
        }
    } else {
        window.alert (`[ERRO] Complete todas as informações`)
    }
}

function finalizar () {
    var msg = document.getElementById('msg')
    msg.innerHTML = `Certo, seu pedido já está sendo preparado e em até 50 minutos irá até você. Obrigado pela preferência!`
}

function dadosCorretos() {
    
    if (document.getElementById("txtAv").value.length < 5 || //verifica se o input text tem tamanho menor que 5
        document.getElementById("txtNum").value.length == 1 ||
        document.getElementById("txtCont").value.length < 9) {
        return false
    } else {
        return true
    }
}

 function dadosComida() {
    let rad1 = document.querySelector('input[name="rad1"]:checked')
    let rad2 = document.querySelector('input[name="rad2"]:checked')
    let rad3 = document.querySelector('input[name="rad3"]:checked')
    let rad4 = document.querySelector('input[name="rad4"]:checked')
    let rad5 = document.querySelector('input[name="rad5"]:checked')
    if (rad1 == null || rad2 == null || rad3 == null || rad4 == null || rad5 == null) {
        return false    
    } else {
        return true
    }
}