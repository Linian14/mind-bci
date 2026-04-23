
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bciVideo");
    video.addEventListener("seeking", () => {
        console.log("Video is looping or being manipulated.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("bciVideo");
    const cutOffTime = 30;
    video.addEventListener("timeupdate", function () {
        if (this.currentTime >= cutOffTime) {
            this.pause();
            this.currentTime = 0;
            this.play();
        }
    });
});