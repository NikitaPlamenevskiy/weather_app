const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  );
  const result = await response.json();
  return result;
}

export { getCurrentWeather };

// Для поиска по городу
// `${API_URL}?q={cityName}&cnt={cnt}&units=metric&appid=${apiKey}`
//Для загрезнения воздуха
// api.openweathermap.org/data/2.5/air_pollution
// Для 5 дней 
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}