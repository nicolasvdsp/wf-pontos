function animateLogo() {

  const playerContainers = document.querySelectorAll(".lottie-animation");

  playerContainers.forEach(container => {
    const player = container.querySelector("dotlottie-player")


    container.addEventListener("mouseover", () => {
      player.setDirection(1);
      player.play();
    });

    container.addEventListener("mouseleave", () => {
      player.setDirection(-1);
      player.play();
    });
  });
}

export default {
  animateLogo
}