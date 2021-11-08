var escolherSomar = document.getElementById('areaSomar')
var escolherSubtrair = document.getElementById('areaSubtrair')
var escolherMultiplicar = document.getElementById('areaMultiplicar')
var escolherDividir = document.getElementById('areaDividir')
function mudarCor() {
    escolherSomar.style.background = 'black'
    escolherSubtrair.style.background = 'black'
    escolherMultiplicar.style.background = 'black'
    escolherDividir.style.background = 'black'
}
function somar() {
    escolherSomar.style.background = 'green'
    var tn1 = document.getElementById('txtn1') // variável que seleciona a string colocada no input txtn1
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value) // Lê o número(string) e recebe seu valor (Number)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${s} </strong>` // Muda o HTML correspondente a div "res"
}
function subtrair() {
    escolherSubtrair.style.background = 'green'
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong> ${s} </strong>`
}
function multiplicar() {
    escolherMultiplicar.style.background = 'green'
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a <strong> ${s} </strong>`
}
function dividir() {
    escolherDividir.style.background = 'green'
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong> ${s} </strong>`
}