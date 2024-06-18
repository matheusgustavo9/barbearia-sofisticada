// Telefone
function formatarNumero() {
    let input = document.getElementById('telefone');
    let numero = input.value.replace(/\D/g, '');

    if (numero.length > 2) {
        input.value = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 7);

        if (numero.length > 7) {
            input.value += ' - ' + numero.substring(7, 11);
        }
    }
}

// Agendado
function agendarCorte() {
    let nome = document.getElementById('nome').value;
    const contato = document.getElementById("contato")

    if (nome) {
        let agendado = document.createElement("div");
        agendado.className = "agendado";

        let paragrafo = document.createElement("p");
        paragrafo.textContent = `Seu corte foi agendado ${nome}`;

        agendado.appendChild(paragrafo);

        contato.appendChild(agendado);
    }
}

function agendarCorte() {
    let nome = document.getElementById('nome').value;
    const corteAgendado = document.getElementById("agendar-corte");

    if (nome) {
        // Cria um novo elemento div para substituir o conteúdo
        let textoAgendado = document.createElement("div");
        textoAgendado.className = "agendado";

        let paragrafo = document.createElement("p");
        paragrafo.textContent = `Seu corte foi agendado ${nome}`;

        textoAgendado.appendChild(paragrafo);

        corteAgendado.innerHTML = '';
        corteAgendado.appendChild(textoAgendado);
    }
}