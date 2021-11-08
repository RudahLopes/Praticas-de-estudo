var escolherSomar = document.getElementById('areaSomar')
var escolherSubtrair = document.getElementById('areaSubtrair')
var escolherMultiplicar = document.getElementById('areaMultiplicar')
var escolherDividir = document.getElementById('areaDividir')
var escolherPotencia = document.getElementById('areaPotencia')
function mudarCor () {
    escolherSomar.style.background = 'white'
    escolherSubtrair.style.background = 'white'
    escolherMultiplicar.style.background = 'white'
    escolherDividir.style.background = 'white'
    escolherPotencia.style.background = 'white'
}
function Somar () {
    var s = 0
    escolherSomar.style.background = 'green'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    s = n1 + n2
    resultado.innerHTML = `O resultado é : <strong>${s}</strong>`
}
function Subtrair () {
    escolherSubtrair.style.background = 'green'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    resultado.innerHTML = `O resultado é : <strong>${s}</strong>`
}
function Multiplicar () {
    escolherMultiplicar.style.background = 'green'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    resultado.innerHTML = `O resultado é : <strong>${s}</strong>`
}
function Dividir () {
    escolherDividir.style.background = 'green'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    resultado.innerHTML = `O resultado é : <strong>${s}</strong>`
}
function Potencia () {
    escolherPotencia.style.background = 'green'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var contador = n2 - 1
    var s = n1
    do {
       s = n1 * s
       contador--
    } while (contador > 0)
    resultado.innerHTML = `O resultado é : <strong>${s}</strong>`
}