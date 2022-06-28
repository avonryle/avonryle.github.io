// start custom fade out effect
var LWS = document.querySelector('.loader-wrapper').style;
LWS.opacity = 1;

const r = (function fade() {
  (LWS.opacity -= .1) < 0
    ? LWS.display = "none"
    : setTimeout(fade, 30)
})

setTimeout(r, 5000)

// end custom fade out effect

// start innerHTML changing files
function loadProjects() {
  fetch('../../projects.html')
    .then(response => response.text())
    .then(text => document.body.innerHTML = text);
}

function loadHome() {
  fetch('../../index.html')
    .then(response => response.text())
    .then(text => document.body.innerHTML = text);
}

(function() {
  $('.is-at-end')
    .css(
      'position', 
      $(document).height() > $(window).height() 
      ? "inherit" 
      : "fixed"
    );
})();
