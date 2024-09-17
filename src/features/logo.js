function animateLogoOnHover() {

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

function animateLogoMobile() {
  const playerContainers = document.querySelectorAll(".lottie-animation");

  setInterval(() => {
    const checkScreenSize = window.matchMedia("(max-width: 479px)");
    if (checkScreenSize.matches) {
      playerContainers.forEach(container => {
        const player = container.querySelector("dotlottie-player")
        console.log("hey");
        player.setDirection(1);
        player.play();
        setTimeout(() => {
          player.setDirection(-1);
          player.play();
        }, 3000);
      });
    }
  }, 10000)
}

function animateLogo() {
  animateLogoOnHover();
  animateLogoMobile();
}

export default animateLogo