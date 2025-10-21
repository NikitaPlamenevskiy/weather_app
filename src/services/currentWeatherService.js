const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = import.meta.env.API_KEY;
const lat = "56.48";
const lon = "84.94";

async function getCurrentWeather() {
  try {
    const response = await fetch(
      `${API_URL}?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export { getCurrentWeather };