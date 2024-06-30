const agendarCorte = document.querySelector('#agendar-corte');
const textoAgendado = document.querySelector('#texto-agendado')

function agendar() {
    const nomeInput = document.querySelector('#nome');
    const telefoneInput = document.querySelector('#telefone');
    const dataHoraInput = document.querySelector('#data-hora');
    
    const nome = nomeInput.value;
    const telefone = telefoneInput.value;
    const dataHoraValor = dataHoraInput.value;
    
    const dataHora = new Date(dataHoraValor);
    const dia = dataHora.getDate().toString().padStart(2, '0');
    const mes = (dataHora.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours().toString().padStart(2, '0');
    const minutos = dataHora.getMinutes().toString().padStart(2, '0');
    
    if(nome !== '' && telefone !== '' && dataHoraValor !== '') {
        agendarCorte.style.display = 'flex';
        textoAgendado.innerHTML = `Obrigado por agendar conosco, ${nome}! Estamos prontos para deixar seu visual incrível. Até logo! <br> <br> Seu corte foi agendado para o dia ${dia}/${mes}/${ano} as ${hora}:${minutos}`
        
        setTimeout(() => {
            agendarCorte.style.display = 'none';
            nomeInput.value = '';
            telefoneInput.value = '';
            dataHoraInput.value = '';
            document.querySelector('#email').value = ''
            document.querySelector('#barba').value = '';
            document.querySelector('#cabelo').value = '';
            document.querySelector('.digite').value = '';
        }, 8000);
    }
}