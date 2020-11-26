var interval = 900;
var colors = ["#fcefd6", "#d0edcc", "#6de9b6", "#4de7b0", "#372d30"];
var defaults = {
  startVelocity: 30,
  spread: 360,
  ticks: 100,
  zIndex: 0,
  colors: colors,
};
var isAnimationStart = false;
var intervalTimout = null;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function openMessage() {
  var body = document.getElementsByTagName("body")[0];

  body.classList.add("message_open");
  startAnimation();
}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    if(isAnimationStart) {
      startAnimation();
    }
    return;
  }
  stopAnimation();
});

function stopAnimation() {
  if (intervalTimout) {
    clearTimeout(intervalTimout);
  }
}

function startAnimation() {
  isAnimationStart = true;
  intervalTimout = setInterval(function () {
    var particleCount = 50;
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, interval);
}
