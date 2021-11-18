function escolha1(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Utiliza o feitiço Petrificus Totalus, que tem como objetivo petrificar seu oponente.\nDigite 2 - Utiliza uma harpa encantada que encontra no alçapão para que seja tocada continuamente e o cão consiga adormecer.")
    if (opcao == 1) {
        return location = ("./hermione1opcao1.html")
    } else if (opcao == 2) {
        return location = ("./hermione1opcao2.html")
    } else {
        return alert("Opção inválida")
    }
}

function escolha2(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Lembra-se de que é necessário emitir um grito ensurdecedor para que a planta seja paralisada, fazendo com que todos consigam se soltar.\nDigite 2 - Lembra-se de que basta relaxar o próprio corpo para que a planta se solte, pois é através do medo das pessoas que ela se alimenta.")
    if (opcao == 1) {
        return location = ("./hermione2opcao1.html")
    } else if (opcao == 2) {
        return location = ("./hermione2opcao2.html")
    } else {
        return alert("Opção inválida")
    }
}

function escolha3(opcao) {
    opcao = prompt("Qual opção você escolhe?\nDigite 1 - Ela usa o feitiço Lumus Solen, que cria uma luz semelhante à solar e afeta diretamente a planta.\nDigite 2 - Ela usa o feitiço Aqua Eructo, capaz de produzir um forte jato de água para que a planta se afogue e morra imediatamente.")
    if (opcao == 1) {
        return location = ("./hermione3opcao1.html")
    } else if (opcao == 2) {
        return location = ("./hermione3opcao2.html")
    } else {
        return alert("Opção inválida")
    }
}

function reinicia() {
    return location = ("../index.html")
}