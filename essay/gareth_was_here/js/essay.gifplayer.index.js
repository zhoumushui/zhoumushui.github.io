$(document).ready(function () {
    window.setTimeout(doGIFJob, 3000); // FIXME:添加延迟
});


function doGIFJob() {
    $('.gifs').gifplayer();
}