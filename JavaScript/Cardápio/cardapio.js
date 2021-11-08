var txtC = document.getElementById('txtC')
var lista = document.getElementById('txtLF')
var res = document.getElementById('res')
var vetC = []
var cox = 0
var chu = 0
var pas = 0
var cq = 0
var fb = 0
var rl = 0
var rlit = 0
var ga = 0

function isNumero(n) {
    if (Number(n) >= 100 && Number(n) <= 107) {
        return true
    } else {
        return false
    }
}

function soma () {
    var resS = 0
    for (var c = 0; c < vetC.length; c++) {
        resS += vetC[c] 
    }
    return resS
}

function finalizar () {
    res.innerHTML = `Você acabou de adicionar ao carrinho: </br>
                     - ${cox} coxinha(s)</br>
                     - ${chu} churro(s)</br>
                     - ${pas} pastel(téis)</br>
                     - ${cq} cachorro(s) quente</br>
                     - ${fb} fatia(s) de bolo</br>
                     - ${rl} refrigerante(s) lata</br>
                     - ${rlit} refrigerante(s) 1L</br>
                     - ${ga} Guaraná(s) dos amazonas</br>
                     Totalizando R$${soma()} em compras`
}

function adicionar () {
    if (isNumero(txtC.value)) {
        var codigo = Number(txtC.value)
        var item = document.createElement('option')
        switch (codigo) {
            case 100:
                item.text = `Coxinha adicionada`
                lista.appendChild(item)
                cox++
                vetC.push(2.5)
                break
            case 101:
                item.text = 'Churros adicionado'
                lista.appendChild(item)
                chu++
                vetC.push(1.5)
                break
            case 102:
                item.text = 'Pastel Adicionado'
                lista.appendChild(item)
                pas++
                vetC.push(2)
                break
            case 103:
                item.text = 'Cachorro Quente adicionado'
                lista.appendChild(item)
                cq++
                vetC.push(3)
                break
            case 104:
                item.text = 'Fatia de Bolo adicionada'
                lista.appendChild(item)
                fb++
                vetC.push(2.5)
                break
            case 105:
                item.text = 'Refrigerante Lata adicionado'
                lista.appendChild(item)
                rl++
                vetC.push(3)
                break
            case 106:
                item.text = 'Refrigerante 1L adicionado'
                lista.appendChild(item)
                rlit++
                vetC.push(7)
                break
            case 107:
                item.text = 'Guarana do amazonas adicionado'
                lista.appendChild(item)
                ga++
                vetC.push(6)
                break
        }
        txtC.value = ''
        txtC.focus()
   
    } else {
        window.alert ('Código incorreto')
        txtC.value = ''
        txtC.focus()
    }
}