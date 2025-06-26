document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("musica");
    audio.volume = 0.5; // Ajusta o volume (0.0 a 1.0)
});

// Função para tocar a música quando o botão for clicado
function tocarMusica() {
    const audio = document.getElementById("musica");
    audio.play().catch(error => console.log("Reprodução automática bloqueada pelo navegador:", error));
    // Agora, a música vai começar a tocar quando o botão for clicado
}

function atualizarCronometro() {
    const dataInicial = new Date('2023-09-24T00:00:00'); // Data inicial
    const agora = new Date(); // Data atual

    // Calcular a diferença em anos
    let anos = agora.getFullYear() - dataInicial.getFullYear();

    // Calcular a diferença em meses
    let meses = agora.getMonth() - dataInicial.getMonth();

    // Ajuste caso o mês atual seja anterior ao mês de aniversário
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // Calcular a diferença de dias
    const diferenca = agora - dataInicial;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // Calcular a diferença em semanas
    const semanas = Math.floor(dias / 7);

    // Calcular as horas, minutos e segundos restantes
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizar o conteúdo da página com o tempo formatado
    document.getElementById('cronometro').textContent = `${anos} ano, ${meses} meses, ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    document.getElementById('mensagem').textContent = "Feliz Mesversário ❤️";
}

// Atualizar o cronômetro a cada segundo
setInterval(atualizarCronometro, 1000);
