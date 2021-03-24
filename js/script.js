let searchInp = document.querySelector(".weather_search");
// let searchInp = document.getElementsByName("weather_search");
let city = document.querySelector(".weather_city");
let day = document.querySelector(".weather_day");
let humidity = document.querySelector("weather_indicaton--humidity>.value");
let wind = document.querySelector("weather_indicaton--wind>.value");
let pressure = document.querySelector("weather_indicaton--pressure>.value");
let weather_image = document.querySelector("weather_image");
let weather_temperature = document.querySelector("weather_temperature");

let weatherAPIKey = "390a554fa4e2ddea1ff6d3f5c8699174";
let weatheAPIEndpoint =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  weatherAPIKey;

let getWeatherByCityName = async (city) => {
  let endpoint = weatheAPIEndpoint + "&q=" + city;
  //   console.log(endpoint);
  let response = await fetch(endpoint);
  let weatherData = await response.json();
  console.log(weatherData);
};

// getWeatherByCityName("Vancouver");
// searchInp.addEventListener("keydown", (e) => {
//   console.log(e);
// });

searchInp.addEventListener("keydown", (e) => {
  console.log(e);
});
