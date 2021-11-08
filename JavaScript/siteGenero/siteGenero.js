function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var nome = document.getElementById('name')
    var name = String(nome.value)
    var nascimento = document.getElementById('nascimento')
    var nasc = Number(nascimento.value)
    var data = new Date ()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - nasc
    if (nasc == 0 || nasc > anoAtual) {
        window.alert('[ERRO] Verifique as informações e tente novamente')
    } else {
        var gen = document.getElementsByName('radsex')
        var res = ''
        if (gen[0].checked) {
                res = 'homem cis'
                msg.innerHTML = `Olá, ${name}, você tem ${idade} anos e se identifica como ${res}.`
                img.src = 'mc.png'
            } else if (gen[1].checked) {
                res = 'mulher cis'
                msg.innerHTML = `Olá, ${name}, você tem ${idade} anos e se identifica como ${res}.`
                img.src = 'fc.png'
            } else if (gen[2].checked) {
                res = 'pessoa trans'
                msg.innerHTML = `Olá, ${name}, você tem ${idade} anos e se identifica como ${res}.`
                img.src = 'trans.png'
            } else if (gen[3].checked) {
                res = 'pessoa não binária'
                msg.innerHTML = `Olá, ${name}, você tem ${idade} anos e se identifica como ${res}.`
                img.src = 'nbin.png'
            }
    }
}
