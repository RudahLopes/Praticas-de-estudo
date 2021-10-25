function gerar() {
    var n1 = document.getElementById('txtn')
    var text = document.getElementById('txtTabuada')
    if (n1.value.length == 0) {
        window.alert ('[ERRO] Digite algum número')
    } else {
        text.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var n = Number(n1.value)
            var r = n * c
            var item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${r}`
            text.appendChild(item)
        }
    }
}