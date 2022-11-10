const bodyEl = document.querySelector("body");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

setInterval(() => {
  const xPosition = getRandomInt(1, 1440);
  const ypoistion = getRandomInt(0, 900);
  const spanEl = document.createElement("span");

  spanEl.style.left = xPosition + "px";
  spanEl.style.top = ypoistion + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}, 20);
