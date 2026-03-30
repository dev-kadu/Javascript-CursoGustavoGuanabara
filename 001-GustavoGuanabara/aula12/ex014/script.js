function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora < 12) {
        msg.innerHTML += ` Bom dia!`
        imagem.src = 'imagens/amanhecer.jpg'
        document.body.style.background = '#d8ac0c96'
    } else if (hora < 18) {
        msg.innerHTML += ` Boa tarde!`
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ce7b3c'

    } else {
        msg.innerHTML += ` Boa noite!`
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#32373B'

    }
}