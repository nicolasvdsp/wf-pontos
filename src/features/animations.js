function animateContentMenu() {
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

export default animateContentMenu;