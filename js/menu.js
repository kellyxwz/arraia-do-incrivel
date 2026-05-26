
const form = document.getElementById('form-conversao');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const numeroWhatsapp = "5599991994628"; 


        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const tipoEvento = document.getElementById('tipo-evento').options[document.getElementById('tipo-evento').selectedIndex].text;
        const mensagemOpcional = document.getElementById('mensagem').value;

        let textoMensagem = `Olá! Gostaria de solicitar uma demonstração do Arraiá do In-cri-vél. 🔥\n\n`;
        textoMensagem += `• *Nome:* ${nome}\n`;
        textoMensagem += `• *E-mail:* ${email}\n`;
        textoMensagem += `• *Telefone/Whats:* ${telefone}\n`;
        textoMensagem += `• *Tipo de Evento:* ${tipoEvento}\n`;
        
        if (mensagemOpcional.trim() !== "") {
            textoMensagem += `• *Detalhes:* ${mensagemOpcional}\n`;
        }

        const textoCodificado = encodeURIComponent(textoMensagem);

        const urlFinal = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;
        
        window.open(urlFinal, '_blank');
    });
}