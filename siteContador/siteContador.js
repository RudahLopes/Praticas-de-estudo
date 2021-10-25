function contar () {
    var inicio = document.getElementById('txti')
    var i = Number(inicio.value)
    var fim = document.getElementById('txtf')
    var f = Number(fim.value)
    var contador = document.getElementById('txtp')
    var c = Number(contador.value)
    var msg = document.getElementById('msg')
    //console.log (`${n1} -> `)
    if (inicio.value.length == 0 || fim.value.length == 0 || contador.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        msg.innerHTML = 'Contando: '
        if (c == 0 || c < 0) {
            window.alert('Passo inválido. Considerando como valor 1') 
            c = 1 
            if (i<f) {
                // Contagem Crescente
                for (n = i; n <= f; n += c) {
                    if (n <= f) {
                        msg.innerHTML += `${n} \u{1F449} ` //código referente ao emoji
                    }
                }
                msg.innerHTML +=` \u{1F3F4}`
            } else {
                // Contagem Regressiva
                for (n = i; n >= f; n -= c) {
                    if (n >= f) {
                        msg.innerHTML += `${n} \u{1F449} ` 
                    }
                }
                msg.innerHTML +=` \u{1F3F4}`
        }
    } else if (i<f) {
        for (n = i; n <= f; n += c) {
            if (n <= f) {
                msg.innerHTML += `${n} \u{1F449} ` 
            }
        }
        msg.innerHTML +=` \u{1F3F4}`
    } else if (i>f){
        for (n = i; n >= f; n -= c) {
            if (n >= f) {
                msg.innerHTML += `${n} \u{1F449} ` 
            }
        }
        msg.innerHTML +=` \u{1F3F4}`
    }
        }
}