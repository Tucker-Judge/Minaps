let seconds = 33;
let loops = 12;
let videoPlayer = null;
const isVideoPlaying = (videoElem) => {
    return videoElem && !videoElem.paused && !videoElem.ended && videoElem.readyState > 2;
}
document.addEventListener('DOMContentLoaded', function() {

    while(!videoPlayer){
        videoPlayer = document.querySelector("#movie_player > div.html5-video-container > video")
        videoPlayer.currentTime = seconds;
    }

    while(videoPlayer && isVideoPlaying(videoPlayer)){
        let interval = setInterval(() => {
            if(loops !== 0){
                loops--;
                videoPlayer.currentTime = seconds;
            } else {
                seconds += 10;
                loops = 12;
            }
        },10000);
        clearInterval(interval);
    }
})
// url had an id so we know to look in between test examples and new
// could insert markdown
// title was inserted in main page document
// new page had
