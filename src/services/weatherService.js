const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  const result = await response.json();
  return result;
}

async function getCurrentForecast(latitude, longitude) {
  const response = await fetch(
    `${FORECAST_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  const result = await response.json();
  return result;
}

async function getCurrentWeatherByCity(city) {
  const response = await fetch(
    `${WEATHER_URL}?q=${city}&units=metric&appid=${API_KEY}`
  );
  const result = await response.json();
  return result;
}

export { getCurrentWeather, getCurrentForecast, getCurrentWeatherByCity };


//Для загрязнения воздуха
// api.openweathermap.org/data/2.5/air_pollution