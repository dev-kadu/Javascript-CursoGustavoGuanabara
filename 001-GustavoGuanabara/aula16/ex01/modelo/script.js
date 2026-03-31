let numero = document.getElementById('numero')
let lista = document.getElementById('select')
let resultado = document.getElementById('textoresultado')
let valores = []

function isNumero(numero) {
    if(Number(numero) >= 1 && Number(numero) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero)) != -1){
        return true
    } else {
        return false
    }
}




function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor Inválido ou já na lista')
    }
    numero.value = ''
    numero.focus()
    resultado.innerHTML = ``
}

function finalizar(){
    if (valores.length == 0 ) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos] 
        }
        media = soma/total
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}. </p>`

    }
}

