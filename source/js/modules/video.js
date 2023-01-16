function play() {
  document.getElementById("vidwrap").innerHTML =
    '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" frameborder="0"></iframe>';
}
play();

const videoButton = document.getElementsByClassName("about__vid-play");
const videoPoster = document.getElementsByClassName("about__vid-poster");
const linkVideo = document.getElementsByClassName("about__vid-link");

const initVideo = () => {
  for (let i = 0; i < linkVideo.length; i++) {
    linkVideo[i].removeAttribute("href");
  }
  for (let i = 0; i < videoButton.length; i++) {
    videoButton[i].classList.remove("about__vid-play--hidden");
  }
};
initVideo();

for (let i = 0; i < videoButton.length; i++) {
  videoButton[0].addEventListener("click", () => {
    play();
    hidePoster();
  });
}

const hidePoster = () => {
  for (let i = 0; i < videoButton.length; i++) {
    videoButton[i].classList.add("about__vid-play--hidden");
  }
  for (let i = 0; i < videoPoster.length; i++) {
    videoPoster[i].classList.add("about__vid-poster--hidden");
  }
};
