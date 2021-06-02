function lombada() {
    var velocidade = document.getElementById('Velocidade')
    var res = document.getElementById('res')
    var vel = Number(velocidade.value)
    //res.innerHTML = `Tua velocidade foi de ${vel} Km/h.`
    if (vel > 80) {
        res.innerHTML = `Tua velocidade foi de ${vel} Km/h. Tu passou do limite de velocidade! TOMA MULTA!`
    } 
    else {
        res.innerHTML = `Tua velocidade foi de ${vel} Km/h. Pode seguir seu caminho`
    }
}