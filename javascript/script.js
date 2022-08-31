// CARREGAR AVISO
window.addEventListener("load", function(){
    if (window.localStorage.getItem('aviso') != 'lido'){
    document.querySelector(".aviso").style.display = "block";
    }else
    document.querySelector(".aviso").style.display = "none";
});

//FECHAR AVISO
document.querySelector(".aviso-btn").addEventListener("click", function(){
    document.querySelector(".aviso").style.display = "none";
    window.localStorage.setItem('aviso','lido');
});

//RESETAR AVISO APÓS UM TEMPO


// MODO DARK
const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener('change', function() {
    toggleDarkMode();

    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
});

// OPÇÕES DE IDIOMAS
function Mudarestado(idiomas) {
    const display = document.querySelector("#idiomas").style.display;

    if(display == "flex"){
        document.getElementById(idiomas).style.display = 'none';
    }else{
        document.getElementById(idiomas).style.display = 'flex';
    }
};

// TROCA DE IDIOMAS
function english() {
    var english = document.getElementsByClassName("en");
    english[0].innerHTML = "from ground to world";
    english[1].innerHTML = "Home";
    english[2].innerHTML = "About Us";
    english[3].innerHTML = "Products";
    english[4].innerHTML = "Stores";
    english[5].innerHTML = "Contact";
    english[6].innerHTML = "We produce all-natural citrus juices, with the aim of offering people a healthier life.";
    english[7].innerHTML = "All our fruits are monitored from planting to harvesting, ensuring a high quality standard.";
    english[8].innerHTML = "Our Products";
    english[9].innerHTML = "Where to Buy?";
    english[10].innerHTML = "Da Roça © 2022 - All rights reserved - CNPJ: 00.000.000/0000-00";
    english[11].innerHTML = "Branding Design | Web Design for ";
}
function portuguese() {
    var portuguese = document.getElementsByClassName("pt");
    portuguese[0].innerHTML = "do mato para o mundo";
    portuguese[1].innerHTML = "Início";
    portuguese[2].innerHTML = "Sobre Nós";
    portuguese[3].innerHTML = "Produtos";
    portuguese[4].innerHTML = "Lojas";
    portuguese[5].innerHTML = "Contato";
    portuguese[6].innerHTML = "Produzimos sucos cítricos totalmente naturais, com o objetivo de oferecer uma vida mais saudável para as pessoas.";
    portuguese[7].innerHTML = "Todas as nossas frutas são monitoradas do plantio até a colheita, garantindo um padrão de qualidade alto.";
    portuguese[8].innerHTML = "Nossos Produtos";
    portuguese[9].innerHTML = "Onde Comprar";
    portuguese[10].innerHTML = "Da Roça © 2022 - Todos os direitos reservados - CNPJ: 00.000.000/0000-00";
    portuguese[11].innerHTML = "Branding Design | Web Design por ";
}

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