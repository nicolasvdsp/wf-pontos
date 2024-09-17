const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function animateContentMenu() {
  if (!isTouchDevice) {
    document.querySelectorAll('.link--content').forEach(element => {
      element.addEventListener('mouseenter', () => {
        console.log('hover');
        document.querySelectorAll('.link--content').forEach(sibling => {
          if (sibling !== element) {
            sibling.classList.add('dimmed');
          }
        });
      });

      element.addEventListener('mouseleave', () => {
        document.querySelectorAll('.link--content').forEach(sibling => {
          sibling.classList.remove('dimmed');
        });
      });
    });
  }
}

export default animateContentMenu;