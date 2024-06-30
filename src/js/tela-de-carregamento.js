const telaDeCarregamento = document.getElementById('tela-carregamento');
const carregandoElemento = document.getElementById('carregando');
const cabecalho = document.querySelector("header")
const conteudoPrincipal = document.querySelector("main")
const rodape = document.querySelector("footer")

window.addEventListener('load', function() {
    document.body.style.overflow = "auto";
    telaDeCarregamento.style.display = "none";
    carregandoElemento.style.display = 'none';

    cabecalho.style.display = 'flex';
    conteudoPrincipal.style.display = 'block';
    rodape.style.display = 'flex';
});