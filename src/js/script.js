//? Telefone
// function formatarNumero() {
//     let input = document.getElementById('telefone');
//     let numero = input.value.replace(/\D/g, '');

//     if (numero.length > 2) {
//         input.value = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 7);

//         if (numero.length > 7) {
//             input.value += ' - ' + numero.substring(7, 11);
//         }
//     }
// }

//? Agendado
// function agendarCorte() {
//     let nome = document.getElementById('nome').value;
//     const contato = document.getElementById("contato")

//     if (nome) {
//         let agendado = document.createElement("div");
//         agendado.className = "agendado";

//         let paragrafo = document.createElement("p");
//         paragrafo.textContent = `Seu corte foi agendado ${nome}`;

//         agendado.appendChild(paragrafo);

//         contato.appendChild(agendado);
//     }
// }

// function agendarCorte() {
//     let nome = document.getElementById('nome').value;
//     const corteAgendado = document.getElementById("agendar-corte");

//     if (nome) {
//?         Cria um novo elemento div para substituir o conteúdo
//         let textoAgendado = document.createElement("div");
//         textoAgendado.className = "agendado";

//         let paragrafo = document.createElement("p");
//         paragrafo.textContent = `Seu corte foi agendado ${nome}`;

//         textoAgendado.appendChild(paragrafo);

//         corteAgendado.innerHTML = '';
//         corteAgendado.appendChild(textoAgendado);
//     }
// }

// const corpo = document.querySelector('body');
// const telaCarregamento = document.getElementById('tela-carregamento');
// const carregando = document.getElementById('carregando');
// const header = document.querySelector("header")
// const main = document.querySelector("main")
// const footer = document.querySelector("footer")

// const telaDeCarregamentoAcabou = setTimeout(function() {
//     corpo.style.overflow = "auto";
//     telaCarregamento.style.display = "none";
//     carregando.style.display = 'none';

//     header.style.display = 'flex';
//     main.style.display = 'block';
//     footer.style.display = 'flex';

//     clearTimeout(telaDeCarregamentoAcabou)
// }, 2000);


const corpoDoDocumento = document.querySelector('body');
const telaDeCarregamento = document.getElementById('tela-carregamento');
const carregandoElemento = document.getElementById('carregando');
const cabecalho = document.querySelector("header")
const conteudoPrincipal = document.querySelector("main")
const rodape = document.querySelector("footer")

window.addEventListener('load', function() {
    // Remover a tela de carregamento e mostrar o conteúdo
    corpoDoDocumento.style.overflow = "auto";
    telaDeCarregamento.style.display = "none";
    carregandoElemento.style.display = 'none';

    cabecalho.style.display = 'flex';
    conteudoPrincipal.style.display = 'block';
    rodape.style.display = 'flex';
});