import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoPause = 0;

player.on("timeupdate", throttleOnFunction);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
player.on('ended', checkValueInLocalStorage);

function throttleOnFunction() {
    throttle(currentVideoTime, 1000);
}

function currentVideoTime(e) {
    videoPause = e.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(videoPause));
};

function checkValueInLocalStorage() {
    player.off('timeupdate', throttleOnFunction);
    localStorage.setItem("videoplayer-current-time", '0');

}
