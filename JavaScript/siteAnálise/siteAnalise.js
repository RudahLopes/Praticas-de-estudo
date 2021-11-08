var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var vetN = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // se procurar no array "l" e não tiver o número retorne trues
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, vetN)) {
        var n = Number(num.value)
        vetN.push(n)
        var item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert ('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (vetN.length == 0) {
        window.alert ('Adicione algum valor')
    } else {
        var tot = vetN.length
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${tot} elementos </p>
                         <p>A soma entre os números adicionados é: ${soma()} </p>
                         <p>O maior número entre os adicionados é: ${maiorNumero()} </p>
                         <p>O menor número entre os adicionados é: ${menorNumero()} </p>
                         <p>A média entre os números adicionados é: ${media()}</p>`
    }

}

function soma () {
    var resS = 0
    for (var c = 0; c < vetN.length; c++) {
        resS += vetN[c] 
    }
    return resS
}

function maiorNumero () {
    var maior = vetN[0]
    for (var posicao in vetN) {
        if (vetN[posicao] > maior) {
            maior = vetN[posicao]
        }
    }
    return maior
}

function menorNumero () {
    var menor = vetN[0]
    for (var posicao in vetN) { //este laço for serve para varrer um vetor inteiro
        if (vetN[posicao] < menor) {
            menor = vetN[posicao]
        }
    }
    return menor
}

function media () {
    var resS = 0
    for (var c = 0; c < vetN.length; c++) {
        resS += vetN[c] 
    }
    var resM = resS/vetN.length
    return resM
}






/* function adicionar () {
    if (fnum.value.length == 0) {
        window.alert ('Digite algum número entre 1 e 100')
    } else {
        text.innerHTML = ''
        var n = Number(fnum.value)
        vetN.push(n)
        var last = vetN.length - 1
        var item = document.createElement('option')
        item.text = `valor ${vetN[last]} adicionado`
        console.log(vetN[last])
        text.value = last+1
        text.appendChild(item)

    }


} */