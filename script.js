let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let nota1 = document.querySelector("#nota1")
let nota2 = document.querySelector("#nota2")
let nota3 = document.querySelector("#nota3")
let pSituacao = document.querySelector("#situacao")
let pMedia = document.querySelector("#media")
let pResultadoFinal = document.querySelector("#resultadoFinal")
const botao = document.querySelector("#botao")
const formulario = document.querySelector("#formulario")
let mensagemErro = document.querySelector("#mensagem")


formulario.addEventListener("submit", function (evento) {
 evento.preventDefault();

    let situacaoAluno = "";

    let Nota1Valor = Number(nota1.value);
    let Nota2Valor = Number(nota2.value);
    let Nota3Valor = Number(nota3.value);

    let media = (Nota1Valor + Nota2Valor + Nota3Valor) / 3;

        if (media >= 7)
    {
       situacaoAluno = "Aprovado"
        pSituacao.classList.add("aprovado");

    }
    else if (media >= 5 && media <7)
    {
        situacaoAluno = "Recuperação"
        pSituacao.classList.add("recuperacao");

    }
    else
    {
        situacaoAluno = "Reprovado"
        pSituacao.classList.add("reprovado");

    }

    if (nota1 < 0 || nota1 > 10)
    {
        console.log("Digite um número válido.")
    }

    if (nota2 < 0 || nota2 > 10 )
    {
        console.log("Digite um número válido.")
    }

    if (nota3 < 0 || nota3 > 10)
    {
        console.log("Digite um número válido.")
    }

    pMedia.textContent = "Média calculada: " + media.toFixed(2);
    pSituacao.textContent = "Situação: " + situacaoAluno; 
});