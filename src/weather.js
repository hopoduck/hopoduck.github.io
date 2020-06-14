const WEATHER_API_KEY = "5ee8e3cd036efc307f533dcee918a02e";
const LOCATION = "location";
const weather = document.querySelector(".weather");
const weatherCases = {
  200: "thunderstorm",
  201: "thunderstorm",
  202: "thunderstorm",
  210: "lightning",
  211: "lightning",
  212: "lightning",
  221: "lightning",
  230: "thunderstorm",
  231: "thunderstorm",
  232: "thunderstorm",
  300: "sprinkle",
  301: "sprinkle",
  302: "rain",
  310: "rain-mix",
  311: "rain",
  312: "rain",
  313: "showers",
  314: "rain",
  321: "sprinkle",
  500: "sprinkle",
  501: "rain",
  502: "rain",
  503: "rain",
  504: "rain",
  511: "rain-mix",
  520: "showers",
  521: "showers",
  522: "showers",
  531: "storm-showers",
  600: "snow",
  601: "snow",
  602: "sleet",
  611: "rain-mix",
  612: "rain-mix",
  615: "rain-mix",
  616: "rain-mix",
  620: "rain-mix",
  621: "snow",
  622: "snow",
  701: "showers",
  711: "smoke",
  721: "day-haze",
  731: "dust",
  741: "fog",
  761: "dust",
  762: "dust",
  771: "cloudy-gusts",
  781: "tornado",
  800: "day-sunny",
  801: "cloudy-gusts",
  802: "cloudy-gusts",
  803: "cloudy-gusts",
  804: "cloudy",
  900: "tornado",
  901: "storm-showers",
  902: "hurricane",
  903: "snowflake-cold",
  904: "hot",
  905: "windy",
  906: "hail",
  957: "strong-wind",
};

function savePos(positionObj) {
  localStorage.setItem(LOCATION, JSON.stringify(positionObj));
}

function getWeather(positionObj) {
  const lat = positionObj.latitude;
  const lon = positionObj.longitude;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then(function (respons) {
      return respons.json();
    })
    .then(function (json) {
      const weath = json.weather[0].id;
      const img = `<img src="src/weather_icon/${weatherCases[weath]}.svg" alt="${weatherCases[weath]}" class="weather_icon">`;
      const temp = json.main.temp;
      const pos = json.name;
      weather.innerHTML = `${img} ${temp}℃ @${pos}`;
    });
}

function getPosSucs(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude,
    longitude,
  };
  savePos(positionObj);
  getWeather(positionObj);
}

function getPosFail() {
  weather.innerHTML = `Can't access your location. please allow get location!`;
}

function getLocation() {
  if (localStorage.getItem(LOCATION) == null) {
    const location = navigator.geolocation.getCurrentPosition(
      getPosSucs,
      getPosFail
    );
  } else {
    const loadedPos = localStorage.getItem(LOCATION);
    const parsedPos = JSON.parse(loadedPos);
    getWeather(parsedPos);
  }
}

function init() {
  getLocation();
}

init();
