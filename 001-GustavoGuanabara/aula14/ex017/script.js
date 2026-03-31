function tabuada() {
    let numero = Number(document.getElementById('numero').value)
    let resultado = document.getElementById('selecttabuada')
    let texto = document.getElementById('texto')
    if (numero.length == 0 ){
        window.alert('ERRO:  Por Favor insira um número!')
    } else {
    resultado.innerHTML = ``
    texto.innerHTML = `Aqui está o resultado da sua tabuada <br>`
    for(n=0; n<=10; n++) {
        let tabuada = n * numero
        let item = document.createElement('option')
        item.text = `${numero} x ${n} = ${tabuada}`
        item.value = `resultado${n}`
        resultado.appendChild(item)
    }
    }
}


