function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('textoano')
    var resultado = document.getElementById('resultado')

    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERRO] : Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radiosexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        resultado.innerHTML = `Seu sexo é ${genero} e sua idade é  ${idade}`
    }
}