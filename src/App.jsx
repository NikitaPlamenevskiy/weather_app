import { useEffect, useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { getUserPosition } from "./services/userPositionService";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleUserPosition = async () => {
      try {
        const position = await getUserPosition();
        const { latitude, longitude } = position;
        setCoords({ latitude, longitude });
      } catch (error) {
        if (error.code === 1) {
          //If user doesnt allow his geolocation, shows Moscow as default value for coords 
          setCoords({ latitude: 55.7569, longitude: 37.6151 });
        }
      }
    };
    handleUserPosition();
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

  console.log(error);
  return (
    <>
      <WeatherSearch weather={weather} error={error} />
      <WeatherInfo />
    </>
  );
}

export default App;
