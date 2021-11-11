var res = document.getElementById('res')
function mudarCorVerde () {
    res.style.background = 'green'
}
function mudarCorVermelho () {
    res.style.background = 'red'
}
function conferir() {
    var pais = document.getElementById('nacionalidade')
    if (pais.value.toUpperCase() == 'BRASIL') {
        res.innerHTML = 'Isso significa que tu é brasileiro, meu irmão. Dá cá um abraço!'
        mudarCorVerde()
    } 
    else {
        res.innerHTML = 'Tu é estrangeiro!'
        mudarCorVermelho()
    }
}