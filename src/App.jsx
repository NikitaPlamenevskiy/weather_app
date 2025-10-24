/** ToDo:
1. Создать отдельный компонент карточки 
2. Добавить информацию по Air Quality
3. Добавить информацию по Восходу и Заходу солнца
4. Добавить погоду по поиску названия города
[Done] 5. Переделать useEffect используя Promise.all 
6. Сделать адаптацию под планшеты и моб. версию 
**/

import { useEffect, useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { getCurrentForecast } from "./services/weatherService";
import { getUserPosition } from "./services/userPositionService";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  console.log(forecast);

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
        const [weather, forecast] = await Promise.all([
          getCurrentWeather(coords.latitude, coords.longitude),
          getCurrentForecast(coords.latitude, coords.longitude),
        ]);
        setWeather(weather);
        setForecast(forecast);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [coords]);

  return (
    <>
      <WeatherSearch weather={weather} error={error} weekDay={weekDay} />
      <WeatherInfo forecast={forecast} weather={weather} />
    </>
  );
}

export default App;
