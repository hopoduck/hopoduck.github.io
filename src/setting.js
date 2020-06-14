// name setting
const name = document.querySelector(".name");

name.addEventListener("input", nameHandler);

function nameHandler(event) {
  event.preventDefault();
  localStorage.setItem("name", name.value);
}

function loadName() {
  if (localStorage.getItem("name") !== null) {
    name.value = localStorage.getItem("name");
  }
}

function nameInit() {
  loadName();
}

nameInit();

// clock setting
const twelveCheck = document.querySelector(".twelveCheck");

function twelveSet() {
  if (twelveCheck.checked === true) {
    localStorage.setItem("12clock", true);
  } else {
    localStorage.setItem("12clock", false);
  }
}

function preCheck() {
  if (localStorage.getItem("12clock") === "true") {
    twelveCheck.checked = true;
  } else {
    twelveCheck.checked = false;
  }
}

twelveCheck.addEventListener("change", twelveSet);

function clockInit() {
  preCheck();
}

clockInit();

// setting visiblity
const settingHidden = document.querySelector(".settingHidden"),
  settingHiddenLS = localStorage.getItem("settingHidden"),
  SETTINGHIDDEN = "settingHidden";

settingHidden.addEventListener("change", settingHiddenHandler);

function settingHiddenHandler() {
  if (settingHidden.checked === true) {
    localStorage.setItem(SETTINGHIDDEN, true);
  } else {
    localStorage.setItem(SETTINGHIDDEN, false);
  }
}
function settingHiddenCheck() {
  if (settingHiddenLS === "true") {
    settingHidden.checked = true;
  }
}

function settingInit() {
  settingHiddenCheck();
}

settingInit();

// reset
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

function reset() {
  let check = confirm("정말로 데이터를 초기화하시겠습니까?");
  if (check === true) {
    localStorage.clear();
    alert("초기화 되었습니다.");
    window.location.reload();
  } else {
    alert("취소되었습니다.");
  }
}
