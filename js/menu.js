
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

    const btnOrg = document.getElementById('btn-org');
    const btnBar = document.getElementById('btn-bar');
    const depOrg = document.getElementById('depoimento-conteudo-org');
    const depBar = document.getElementById('depoimento-conteudo-bar');

    if (btnOrg && btnBar && depOrg && depBar) {
        btnOrg.addEventListener('click', () => {
            // Ativa botão Org, desativa botão Bar
            btnOrg.className = "bg-primary text-on-primary px-md py-2 rounded-full font-semibold text-label-md shadow-md transition-all";
            btnBar.className = "bg-surface-container text-on-surface hover:bg-surface-container-high px-md py-2 rounded-full font-semibold text-label-md transition-all";
            // Mostra Org, esconde Bar
            depOrg.classList.remove('hidden');
            depBar.classList.add('hidden');
        });

        btnBar.addEventListener('click', () => {
            // Ativa botão Bar, desativa botão Org
            btnBar.className = "bg-secondary text-on-secondary px-md py-2 rounded-full font-semibold text-label-md shadow-md transition-all";
            btnOrg.className = "bg-surface-container text-on-surface hover:bg-surface-container-high px-md py-2 rounded-full font-semibold text-label-md transition-all";
            // Mostra Bar, esconde Org
            depBar.classList.remove('hidden');
            depOrg.classList.add('hidden');
        });
    }


}