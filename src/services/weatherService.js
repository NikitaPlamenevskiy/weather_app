const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const AIR_POLLUTION_URL =
  "https://api.openweathermap.org/data/2.5/air_pollution";


async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}

async function getCurrentForecast(latitude, longitude) {
  const response = await fetch(
    `${FORECAST_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}

async function getCurrentAirPollution(latitude, longitude) {
  const response = await fetch(
    `${AIR_POLLUTION_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}

async function getCurrentWeatherByCity(city) {
  const response = await fetch(
    `${WEATHER_URL}?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}

export {
  getCurrentWeather,
  getCurrentForecast,
  getCurrentAirPollution,
  getCurrentWeatherByCity,
};
