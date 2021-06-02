        do {
                alert("PRECISO SABER TEU NOME")
                var nome = prompt("Insere teu nome aí companheiro")
                alert("MAS NEM SÓ DE NOME VIVEM OS HOMENS")
                var anoNascimento = prompt("Coloca o ano que tu nasceu")
                alert("SHOW, PORRA")
                var anoAtual = prompt("Agora dale o ano atual")
                alert("MASSA, AGORA VAMO VER SE EU SOU BOM DE MATEMÁTICA")
                var idade = Number(anoAtual) - Number(anoNascimento)
                alert("HORA DA VERDADE")
                alert(`ENTÃO ${nome.toUpperCase()}, TUA IDADE É ${idade} ANOS`)
                if (idade <= 0) {
                        alert("ISSO NÃO EXISTE, CAMARADA")
                }
                else {
                        idade <= 17 && idade > 0 ? alert(`tu é de menor, ${nome.toLowerCase()}`) : alert(`TU É DE MAIOR, ${nome.toUpperCase()}`)
                }
                var decisão = prompt("VAMO DALE DNV? SE SIM, ESCREVE 'DALE'")
        } while (decisão == "dale" || decisão == "DALE")