const clock = document.querySelector(".clock");
const hours = clock.querySelector(".hour");
const mins = clock.querySelector(".min");
const secs = clock.querySelector(".sec");
const twelveClockLS = localStorage.getItem("12clock");

function twelveClock(time) {
  if (time > 12) {
    time = time - 12;
    if (time < 10) {
      time = "0" + time;
    }
    time = "PM " + time;
  } else {
    if (time < 10) {
      time = "0" + time;
    }
    time = "AM " + time;
  }
  return time;
}

function format(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

function getTime() {
  // 시간 구하기
  const time = new Date();
  if (twelveClockLS === "true") {
    // 시간이 한자리 수일 경우 앞에 0을 붙여 자리수를 맞춤
    // 설정페이지에서 12시간형식으로 표시함을 선택했을 때 작동
    const hour = twelveClock(time.getHours());
    hours.innerText = hour;
  } else {
    // 설정페이지에서 12시간형식으로 표시 안함을 선택했을 때 작동
    const hour = format(time.getHours());
    hours.innerText = hour;
  }
  var min = format(time.getMinutes());
  var sec = format(time.getSeconds());
  mins.innerText = min;
  secs.innerText = sec;
}

function init() {
  getTime();
  setInterval(() => {
    getTime();
  }, 1000);
}

init();
