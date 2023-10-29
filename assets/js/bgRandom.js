const bgs = ["bg.mp4", "bg1.mp4", "bg2.mp4"];
const video = document.getElementById("video");

let bgIndex = Math.floor(Math.random() * bgs.length);
video.firstElementChild.src = "assets/videos/"+bgs[bgIndex];
video.load();
video.play();