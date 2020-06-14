const name = document.querySelector(".name"),
  inputName = document.querySelector(".inputName"),
  formName = document.querySelector(".formName");

formName.addEventListener("submit", nameHandler);

function nameHandler(event) {
  event.preventDefault();
  localStorage.setItem("name", inputName.value);
  namePaint();
}

function namePaint() {
  if (localStorage.getItem("name") !== null) {
    name.innerText = localStorage.getItem("name");
    formName.style.display = "none";
  }
}

function init() {
  namePaint();
}

init();
