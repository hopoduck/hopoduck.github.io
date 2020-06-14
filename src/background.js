const body = document.querySelector("body");
const img = document.createElement("img");

window.addEventListener("resize", resizeHandler);

function resizeHandler() {
  if (window.innerWidth >= 1920) {
    img.style.width = "100%";
    img.style.height = "auto";
  } else {
    img.style.width = "auto";
    img.style.height = "100%";
  }
}

function init() {
  const random = parseInt(Math.random() * 4) + 1;
  img.src = `src/bg_img/${random}.jpg`;
  if (window.innerWidth >= 1920) {
    img.style.width = "100%";
    img.style.height = "auto";
  } else {
    img.style.width = "auto";
    img.style.height = "100%";
  }
  img.style.position = "absolute";
  img.style.top = "0px";
  img.style.right = "0px";
  img.style.zIndex = -50;
  body.appendChild(img);
}

init();
