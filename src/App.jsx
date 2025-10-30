/** ToDo:
[Done] Создать отдельный компонент карточки для информации Air Pollution / Pressure 
[Done]Создать отдельный компонент карточки погоды
[Done]Добавить информацию по Air Quality
Добавить информацию по Восходу и Заходу солнца
[Done] Добавить погоду по поиску названия города
[Done] Переделать useEffect используя Promise.all 
Сделать адаптацию под планшеты и моб. версию 
**/

import { useEffect, useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { getCurrentForecast } from "./services/weatherService";
import { getCurrentAirPollution } from "./services/weatherService";
import { getCurrentWeatherByCity } from "./services/weatherService";
import { getUserPosition } from "./services/userPositionService";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import { Loader } from "./components/Loader";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airPollution, setAirpollution] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  function handleInputValue(event) {
    setCity(event);
  }

  function determinAirQuality() {
    const airStatus = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor",
    };

    if (airStatus[airPollution.list[0].main.aqi]) {
      return airStatus[airPollution.list[0].main.aqi];
    }
  }

  const weekDay = weather
    ? new Date(weather.dt * 1000).toLocaleString("eng", { weekday: "long" })
    : "";

  useEffect(() => {
    const fetchUserPosition = async () => {
      try {
        const position = await getUserPosition();
        const { latitude, longitude } = position;
        setCoords({ latitude, longitude });
      } catch (error) {
        if (error) {
          //If user doesnt allow his geolocation, shows Moscow as default value for coords
          setCoords({ latitude: 55.7569, longitude: 37.6151 });
        }
      }
    };
    fetchUserPosition();
  }, []);

  useEffect(() => {
    if (!coords) return;

    const fetchData = async () => {
      try {
        const [weather, forecast, airPollution] = await Promise.all([
          getCurrentWeather(coords.latitude, coords.longitude),
          getCurrentForecast(coords.latitude, coords.longitude),
          getCurrentAirPollution(coords.latitude, coords.longitude),
        ]);
        setWeather(weather);
        setForecast(forecast);
        setAirpollution(airPollution);
        setCoords(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [coords]);

  useEffect(() => {
    if (!city) return;
    const fetchWeatherByCity = async () => {
      try {
        const weather = await getCurrentWeatherByCity(city);
        const forecast = await getCurrentForecast(
          weather.coord.lat,
          weather.coord.lon
        );
        const airPollution = await getCurrentAirPollution(
          weather.coord.lat,
          weather.coord.lon
        );
        setWeather(weather);
        setForecast(forecast);
        setAirpollution(airPollution);
        setCity("");
      } catch (error) {
        setError(error);
      }
    };
    fetchWeatherByCity();
  }, [city]);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {weather && forecast && airPollution ? (
        <>
          <WeatherSearch
            weather={weather}
            error={error}
            weekDay={weekDay}
            city={city}
            handleInputValue={handleInputValue}
          />
          <WeatherInfo
            forecast={forecast}
            weather={weather}
            airPollution={airPollution}
            airStatus={determinAirQuality()}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
