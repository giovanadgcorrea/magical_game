function escolha1(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Rony decide mover as peças com a ajuda de Hermione e Harry, espurrando-as aos lugares que desejam para iniciarem a partida.\nDigite 2 - Rony, sendo aprendiz de feiticeiro, decide usar sua voz como comando para que as peças se movam pelo tabuleiro.")
    if (opcao == 1) {
        return location = ("./rony1opcao1.html")
    } else if (opcao == 2) {
        return location = ("./rony1opcao2.html")
    } else {
        return alert("Opção inválida")
    }
}

function escolha2(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Rony resolve ocupar o lugar do cavalo, pede a Harry que ocupe o lugar do bispo e a Hermione que ocupe o lugar da torre da rainha.\nDigite 2 - Rony decide jogar mesmo assim, utilizando as peças que estão disponíveis no tabuleiro, para não perder tempo.")
    if (opcao == 1) {
        return location = ("./rony2opcao2.html")
    } else if (opcao == 2) {
        return location = ("./rony2opcao1.html")
    } else {
        return alert("Opção inválida")
    }
}

function escolha3(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Rony comanda o bispo em C5 e, após a captura do bispo pela dama branca, o cavalo pula para H3, finalizando a partida no ato.\nDigite 2 - Rony segue em frente e comanda seu cavalo a avançar para H3, colocando o rei branco em xeque. Isso obriga a dama branca a capturá-lo, já que o rei não tem casas de fuga, pois o outro bispo preto (não o Harry) em C6 e Hermione no papel de torre em F8 bloqueiam todas as possibilidades de escape.")
    if (opcao == 1) {
        return location = ("./rony3opcao1.html")
    } else if (opcao == 2) {
        return location = ("./rony3opcao2.html")
    } else {
        return alert("Opção inválida")
    }
}

function reinicia() {
    return location = ("../index.html")
}