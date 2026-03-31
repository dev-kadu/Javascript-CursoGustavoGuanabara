
function contador() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `Contando <br>`    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('ERRO:  Faltam dados')
    } else {
        if (passo <= 0 ) {
            window.alert('Passo inválido! Considerando passo = 1 !')
            passo = 1
        }
        if (inicio < fim) {
            for(c = inicio; c <= fim ; c += passo) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for(c = inicio; c>= fim; c-=passo) {
                resultado.innerHTML += `${c} \u{1F449}`
            }

        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}