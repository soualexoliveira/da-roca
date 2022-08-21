// play e pause do video principal
var playerVideo, view;

var btnPlay;

function prepare(elem){
    if(playerVideo != elem){
        playerVideo = elem;

        view = playerVideo.querySelector(".video-view");

        btnPlay = playerVideo.querySelector(".fa-circle-play");
        btnPlay.addEventListener('click', play);
    }
}

function play(){
    if(view.played.length != 0){
        if (view.played.start(0)==0 && !view.paused) {
            view.pause();
            btnPlay.style.backgroundImage = ".fa-circle-play";
        }
        else{
            view.play();
            btnPlay.style.backgroundImage = ".fa-circle-pause";
        }
    }else{
        view.play();
    }
}

// aparecer/desaparecer idiomas qnd apertar no icone
function Mudarestado(idiomas) {
    var display = document.getElementById(idiomas).style.display;
    if(display == "none"){
        document.getElementById(idiomas).style.display = 'block';
    }else{
        document.getElementById(idiomas).style.display = 'none';

    }
}