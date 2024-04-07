const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos")
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)")//classe .projetos que não possuem a classe .ativo

botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisprojetos()//para refatorar o código: selecione as linhas que quer e pressione - ctrl + shift + R
    esconderBotao()
})

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover")
}

function mostrarMaisprojetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add("ativo")
    })
}
