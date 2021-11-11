var a = document.getElementById('area')
a.addEventListener('click', mudarTextoClick)
a.addEventListener('mouseenter', mudarTextoEntrada)
a.addEventListener('mouseout', mudarTextoSaida)
function mudarTextoClick() {
    a.innerText = "BOA, PORRA"
    a.style.background = 'green'
}
function mudarTextoEntrada() {
    a.innerText = "Agr clica em mim"
    a.style.background = 'yellow'
}
function mudarTextoSaida () {
    a.innerText = "Volta aqui"
    a.style.background = 'red'
}