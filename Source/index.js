// Javascript Project //
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city:");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

function cityHeading(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

let cityTitle = document.querySelector("#cityWeather");
cityTitle.addEventListener("submit", cityHeading);

function formatDate() {
  let now = new Date();

  let timeChange = document.querySelector("#day-time");

  let minutes = now.getMinutes();
  let hours = now.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  timeChange.innerHTML = `${day} ${hours}:${minutes}`;
}
formatDate(new Date());
