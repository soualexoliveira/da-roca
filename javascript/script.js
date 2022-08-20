// play e pause do video principal
var playerVideo, view;

var btnPlay;

function prepare(elem){
    if(playerVideo != elem){
        playerVideo = elem;

        view = playerVideo.querySelector(".video-view");

        btnPlay = playerVideo.querySelector(".video-play");
        btnPlay.addEventListener('click', play);
    }
}

function play(){
    if(view.played.length != 0){
        if (view.played.start(0)==0 && !view.paused) {
            view.pause();
            btnPlay.style.backgroundImage = "url(../icon/play.png)";
        }
        else{
            view.play();
            btnPlay.style.backgroundImage = "url(../icon/pause.png)";
        }
    }else{
        view.play();
    }
}
