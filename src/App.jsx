import { useEffect, useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { getUserPosition } from "./services/userPositionService";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [weekDay, setWeekDay] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!weather) return;

    const getCurrentWeekDay = () => {
      const date = new Date(weather.dt * 10000);
      const today = date.toLocaleString("eng", { weekday: "long" });
      setWeekDay(today);
    };
    getCurrentWeekDay();
  }, [weather]);

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

    const fetchWeather = async () => {
      try {
        const data = await getCurrentWeather(coords.latitude, coords.longitude);
        setWeather(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchWeather();
  }, [coords]);

  return (
    <>
      <WeatherSearch weather={weather} error={error} weekDay={weekDay} />
      <WeatherInfo />
    </>
  );
}

export default App;
