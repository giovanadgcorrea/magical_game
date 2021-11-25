function escolha1(opcao) {
    var valida = false
    while (valida == false) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Utiliza o feitiço Alorromora, que tem o poder de destrancar portas e janelas, assim conseguem passar pela porta sem se preocuparem com as chaves.\nDigite 2 - Utiliza uma vassoura mágica que ele encontra flutuando na sala secreta para voar e encontrar a chave correta.")
    if (opcao == 1) {
        valida = true
        return location = ("./harry1opcao1.html")
    } else if (opcao == 2) {
        valida = true
        return location = ("./harry1opcao2.html")
    } else {
        alert("Opção inválida.")
        var sair = prompt("Para sair, digite 3.")
        if (sair == 3) {
            valida = true
            return location = ("../index.html")
        }
    }
    }
}

function escolha2(opcao) {
    var valida = false
    while (valida == false) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Vai até a fechadura da porta para verificar qual é o tipo de entrada e, assim, conseguir escolher a chave correta.\nDigite 2 - Utiliza um feitiço para que a chave fique iluminada e ele consiga apanhá-la.")
    if (opcao == 1) {
        valida = true
        return location = ("./harry2opcao1.html")
    } else if (opcao == 2) {
        valida = true
        return location = ("./harry2opcao2.html")
    } else {
        alert("Opção inválida.")
        var sair = prompt("Para sair, digite 3.")
        if (sair == 3) {
            valida = true
            return location = ("../index.html")
        }
    }
    }
}

function escolha3(opcao) {
    var valida = false
    while (valida == false) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Voa em direção a Hermione e joga a chave para que ela abra a porta e todos consigam sair rapidamente antes que as chaves aladas os ataquem.\nDigite 2 - Abandona a vassoura porque é ela que atrai as chaves e corre rapidamente até a fechadura para abrir a porta e sair correndo da sala com os amigos.")
    if (opcao == 1) {
        valida = true
        return location = ("./harry3opcao1.html")
    } else if (opcao == 2) {
        valida = true
        return location = ("./harry3opcao2.html")
    } else {
        alert("Opção inválida.")
        var sair = prompt("Para sair, digite 3.")
        if (sair == 3) {
            valida = true
            return location = ("../index.html")
        }
    }
    }
}

function reinicia() {
    return location = ("../index.html")
}