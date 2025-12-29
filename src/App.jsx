import { useEffect, useState } from "react";
import { getCurrentWeather } from "./services/weatherService";
import { getCurrentForecast } from "./services/weatherService";
import { getCurrentAirPollution } from "./services/weatherService";
import { getCurrentWeatherByCity } from "./services/weatherService";
import { getUserPosition } from "./services/userPositionService";
import { WeatherSearch } from "./components/WeatherSearch";
import { WeatherInfo } from "./components/WeatherInfo";
import { Loader } from "./components/Loader";
import { getCurrentUvIndex } from "./services/uvService";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    weather: null,
    forecast: null,
    airPollution: null,
    uvIndex: null,
    coords: null,
  });
  const [error, setError] = useState(null);

  function handleInputValue(event) {
    setCity(event);
  }

  function determineAirQuality() {
    const aqi = data.airPollution?.list[0]?.main?.aqi;
    if (!aqi) return;

    const airStatus = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor",
    };

    return airStatus[aqi];
  }

  const weekDay = data.weather
    ? new Date(data.weather.dt * 1000).toLocaleString("eng", {
        weekday: "long",
      })
    : "";

  useEffect(() => {
    const fetchUserPosition = async () => {
      try {
        const position = await getUserPosition();
        const { latitude, longitude } = position;
        setData((prev) => ({
          ...prev,
          coords: { latitude, longitude },
        }));
      } catch (error) {
        if (error) {
          setData((prev) => ({
            ...prev,
            coords: { latitude: 55.7569, longitude: 37.6151 },
          }));
        }
      }
    };
    fetchUserPosition();
  }, []);

  useEffect(() => {
    if (!data.coords) return;

    const fetchData = async () => {
      try {
        const [weather, forecast, airPollution, uv] = await Promise.all([
          getCurrentWeather(data.coords.latitude, data.coords.longitude),
          getCurrentForecast(data.coords.latitude, data.coords.longitude),
          getCurrentAirPollution(data.coords.latitude, data.coords.longitude),
          getCurrentUvIndex(data.coords.latitude, data.coords.longitude),
        ]);
        setData((prev) => ({
          ...prev,
          weather: weather,
          forecast: forecast,
          airPollution: airPollution,
          uvIndex: uv,
          coords: null,
        }));
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [data.coords]);

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
        const uvIndex = await getCurrentUvIndex(
          weather.coord.lat,
          weather.coord.lon
        );
        setData((prev) => ({
          ...prev,
          weather,
          forecast,
          airPollution,
          uvIndex,
          coords: null,
        }));
        setCity("");
      } catch (error) {
        setError(error);
      }
    };
    fetchWeatherByCity();
  }, [city]);

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {data.weather && data.forecast && data.airPollution && data.uvIndex ? (
        <>
          <WeatherSearch
            weather={data.weather}
            error={error}
            weekDay={weekDay}
            city={city}
            handleInputValue={handleInputValue}
          />
          <WeatherInfo
            forecast={data.forecast}
            weather={data.weather}
            airPollution={data.airPollution}
            airQuality={determineAirQuality()}
            uvIndex={data.uvIndex}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
