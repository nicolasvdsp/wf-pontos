/**
 * 
 * @param {*} query - classname, id, or full query to match the element to be modified
 * @param {*} replacementText - text to be replaced
 * @param {number} breakpoint - the breakpoint that will affect the modification
 */
function updateTextOnBreakpoint(query, replacementText, breakpoint) {
  const toBeReplaced = document.querySelector(`${query}`);
  const originalText = toBeReplaced.innerHTML;

  if (window.innerWidth <= breakpoint && toBeReplaced.innerHTML === originalText) {
    toBeReplaced.innerHTML = `${replacementText}`;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= breakpoint && toBeReplaced.innerHTML === originalText) {
      toBeReplaced.innerHTML = `${replacementText}`;
    }
    if (window.innerWidth > breakpoint && toBeReplaced.innerHTML != originalText) {
      toBeReplaced.innerHTML = `${originalText}`
    }
  })
}

function updateAllTextOnBreakpoints() {
  updateTextOnBreakpoint("#fullName", "Nicolas van der Straten", 991);
  updateTextOnBreakpoint(".footer .badge .footer__text", "open to partnership", 850);
  // updateTextOnBreakpoint(".footer .badge .footer__text", "open for work", 727);
}

export default updateAllTextOnBreakpoints;    