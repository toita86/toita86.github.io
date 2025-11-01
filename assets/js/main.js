const video = document.getElementById('header-video');

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

