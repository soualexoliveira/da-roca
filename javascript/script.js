// CARREGAR AVISO
window.addEventListener("load", function(){
    if (window.sessionStorage.getItem('aviso') != 'lido'){
    document.querySelector(".aviso").style.display = "block";
    }else
    document.querySelector(".aviso").style.display = "none";
});

//FECHAR AVISO
document.querySelector(".aviso-btn").addEventListener("click", function(){
    document.querySelector(".aviso").style.display = "none";
    window.sessionStorage.setItem('aviso','lido');
});

//ALTERAR BOTÃO DE IDIOMA DO AVISO
var idiomaBtn = ['PT','EN'];

document.getElementById('aviso-toogle').textContent = window.localStorage.getItem('lang',);

window.addEventListener("load", function(){
    if (window.localStorage.getItem('lang') != "PT"){
        english();
    }else{
        portuguese();
    }
});

function toggleLang(){
    if(document.getElementById('aviso-toogle').textContent != idiomaBtn[1]){
        document.getElementById('aviso-toogle').textContent = idiomaBtn[1];
        window.localStorage.setItem('lang',idiomaBtn[1]);
        english();
    }else{
        document.getElementById('aviso-toogle').textContent = idiomaBtn[0];
        window.localStorage.setItem('lang',idiomaBtn[0]);
        portuguese();
    }
}


function openLang(){
    if(document.querySelector(".idioma").style.display == "flex"){
        document.querySelector(".idioma").style.display = "none";
    }else{
        document.querySelector(".idioma").style.display = "flex";
    }
}

document.getElementById("planet").addEventListener('click', function(){
    openLang();
});

document.getElementById('portugues').addEventListener('click', function(){
    window.localStorage.setItem('lang',idiomaBtn[0]);
    portuguese();
});

document.getElementById('ingles').addEventListener('click', function(){
    window.localStorage.setItem('lang',idiomaBtn[1]);
    english();
});

function english() {
    document.getElementById('slogan').textContent = "citrus power & quality of life";
    document.getElementById('home').textContent = "Home";
    document.getElementById('story').textContent = "About Us";
    document.getElementById('products').textContent = "Products";
    document.getElementById('stores').textContent = "Stores";
    document.getElementById('contact').textContent = "Contact";
    document.getElementById('banner1').textContent = "We produce all-natural citric juice in order to provide a healthier life to our clients.";
    document.getElementById('banner2').textContent = "Our fruit are monitorized all along the process, from planting to harvesting ensuring a high standard of quality.";
    document.getElementById('btn-produtos').textContent = "Our Products";
    document.getElementById('btn-wherebuy').textContent = "Where to Buy?";
    document.getElementById('footer1').textContent = "Da Roça © 2022 - All rights reserved - CNPJ: 00.000.000/0000-00";
    document.getElementById('footer2').textContent = "Branding Design | Web Design for ";
    document.getElementById('aviso-title').textContent = "Important Note";
    document.getElementById('aviso-p1').textContent = "This site is part of a ghost project created with the objective of putting into practice all my knowledge in HTML5, CSS3 and Javascript. All details about the project will be on my Behance and my Github.";
    document.getElementById('aviso-p2').textContent = "Da Roça is just a fictitious company created for student purposes only, and without any financial interest.";
    document.getElementById('aviso-p3').textContent = "If you have any questions or suggestions, please contact me. I will leave my details at the end of the Contacts page.";
}

function portuguese() {
    document.getElementById('slogan').textContent = "poder cítrico & qualidade de vida";
    document.getElementById('home').textContent = "Início";
    document.getElementById('story').textContent = "Sobre Nós";
    document.getElementById('products').textContent = "Produtos";
    document.getElementById('stores').textContent = "Lojas";
    document.getElementById('contact').textContent = "Contato";
    document.getElementById('banner1').textContent = "Produzimos sucos cítricos totalmente naturais, com o objetivo de oferecer uma vida mais saudável para as pessoas.";
    document.getElementById('banner2').textContent = "Todas as nossas frutas são monitoradas do plantio até a colheita, garantindo um padrão de qualidade alto.";
    document.getElementById('btn-produtos').textContent = "Nossos Produtos";
    document.getElementById('btn-wherebuy').textContent = "Onde Comprar";
    document.getElementById('footer1').textContent = "Da Roça © 2022 - Todos os direitos reservados - CNPJ: 00.000.000/0000-00";
    document.getElementById('footer2').textContent = "Branding Design | Web Design por ";
    document.getElementById('aviso-title').textContent = "Observação Importante";
    document.getElementById('aviso-p1').textContent = "Este site faz parte de um projeto fantasma criado com o objetivo de por em prática todos os meus conhecimentos em HTML5, CSS3 e Javascript. Todos os detalhes sobre o projeto estarão no meu Behance e no meu Github.";
    document.getElementById('aviso-p2').textContent = "Da Roça é apenas uma empresa fictícia criada somente para fins estudantis, e sem nenhum interesse financeiro.";
    document.getElementById('aviso-p3').textContent = "Caso tenha dúvidas ou sugestões, entre em contato comigo. Deixarei meus dados no final da página Contatos.";
}

document.querySelector(".aviso-lang").addEventListener("click", function(){
    toggleLang();
});


// MODO DARK
const changeThemeBtn = document.querySelector("#change-theme");

function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}

window.addEventListener("load", function(){
    if (window.localStorage.getItem('mode') != "Claro"){
        toggleTheme();
    }
});

changeThemeBtn.addEventListener('change', function() {
    toggleTheme();

    localStorage.removeItem('modo');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('modo', 'Escuro');
    }else{
        localStorage.setItem('modo', 'Claro');
    }
});

// PLAY/PAUSE - VIDEO PRINCIPAL
var video = document.querySelector(".video-view");
var btnPlay = document.querySelector(".video-play");

btnPlay.addEventListener("click", function () {
    if(video.paused){
        video.play();
        document.getElementById('pausebtn').style.display = "block";
        document.getElementById('playbtn').style.display = "none";
    }else{
        video.pause();
        document.getElementById('pausebtn').style.display = "none";
        document.getElementById('playbtn').style.display = "block";
    }
});