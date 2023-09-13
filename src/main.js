
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const cabecalho_rapido = document.querySelectorAll('[data-nav-link]');

    for(let i = 0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas();

            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo();

            botao.target.classList.add('shows__tabs__button--is-active');

        })
    }

    for(let i = 0; i< questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }

    for(let i= 0; i<cabecalho_rapido.length; i++){
        cabecalho_rapido[i].addEventListener('click', function(botao2){
            const section_alvo = botao2.target.dataset.tabButton;
            //const button_cabecalho_rapido = document.querySelector(`[data-nav-link=${section_alvo}]`);

            //button_cabecalho_rapido.classList.add('active');
            removeSectionAtiva();
            botao2.target.classList.add('active');
        })
    }
})

function removeSectionAtiva(){
    const cabecalho_rapido = document.querySelectorAll('[data-nav-link]');

    for (let i = 0; i < cabecalho_rapido.length; i++){
        cabecalho_rapido[i].classList.remove('active');
    }
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';

    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

// Obtém o botão pelo ID
var buttonAgendar = document.getElementById("agendar_visita");
var buttonAgendar2 = document.getElementById("agendar_visita2");
var buttonCRalto = document.getElementById("buttonCRalto");
var buttonCRmedio= document.getElementById("buttonCRmedio");
var buttonCRbaixo = document.getElementById("buttonCRbaixo");

// Define a função a ser executada quando o botão for clicado
buttonAgendar.addEventListener("click", function() {

    var numeroTelefone = "5598982571856";
    var mensagem = "Olá, VERSA! \n Gostaria de conferir os modelos da coleção!";
    
    // Cria o link do WhatsApp com número e mensagem pré-programada
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Redireciona o usuário para o link do WhatsApp
    window.location.href = linkWhatsApp;
});

buttonAgendar2.addEventListener("click", function() {

    var numeroTelefone = "5598982571856";
    var mensagem = "Olá, VERSA! \n Gostaria de agendar minha minha visita!";
    
    // Cria o link do WhatsApp com número e mensagem pré-programada
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Redireciona o usuário para o link do WhatsApp
    window.location.href = linkWhatsApp;
});

buttonCRalto.addEventListener("click", function() {

    var numeroTelefone = "5598982571856";
    var mensagem = "Olá, VERSA!\n Meu CR é > 8.7 \n Gostaria de agendar minha visita!";
    
    // Cria o link do WhatsApp com número e mensagem pré-programada
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Redireciona o usuário para o link do WhatsApp
    window.location.href = linkWhatsApp;
});

buttonCRmedio.addEventListener("click", function() {

    var numeroTelefone = "5598982571856";
    var mensagem = "Olá, VERSA!\n Meu CR é > 7.7 e <8.7 \n Gostaria de agendar minha visita!";
    
    // Cria o link do WhatsApp com número e mensagem pré-programada
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Redireciona o usuário para o link do WhatsApp
    window.location.href = linkWhatsApp;
});

buttonCRbaixo.addEventListener("click", function() {

    var numeroTelefone = "5598982571856";
    var mensagem = "Olá, VERSA!\n Meu CR é >6.7 e < 7.7 \n Gostaria de agendar minha visita!";
    
    // Cria o link do WhatsApp com número e mensagem pré-programada
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
    
    // Redireciona o usuário para o link do WhatsApp
    window.location.href = linkWhatsApp;
});
