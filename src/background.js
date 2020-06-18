const body = document.querySelector("body");
const img = document.createElement("img");

img.classList.add("bg");

window.addEventListener("resize", resizeHandler);

function resizeHandler() {
  // if (window.innerWidth >= 1920) {
  //   img.style.width = "100%";
  //   img.style.height = "auto";
  // } else {
  //   img.style.width = "auto";
  //   img.style.height = "100%";
  // }
  img.style.width = "100%";
  img.style.height = "100%";
}

function init() {
  const random = parseInt(Math.random() * 4) + 1;
  img.src = `src/bg_img/${random}.jpg`;
    resizeHandler();
  img.style.position = "absolute";
  img.style.top = "0px";
  img.style.left = img.width / 2;
  img.style.zIndex = -50;
  body.appendChild(img);
}

init();
