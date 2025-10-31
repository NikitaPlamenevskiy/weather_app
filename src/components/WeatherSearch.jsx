import styles from "./WeatherSearch.module.css";
import temperatureMin from "../assets/images/temperatureMin.png";
import temperatureMax from "../assets/images/temperatureMax.png";
import wind from "../assets/images/wind.svg";
import humidity from "../assets/images/water.svg";

function WeatherSearch({ weather, weekDay, handleInputValue }) {
  function handleInput(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    handleInputValue(city);
  }
  return (
    <section className={styles.container}>
      <form onSubmit={handleInput}>
        <input
          className={styles.searchInput}
          type="text"
          name="city"
          placeholder="Search city..."
        ></input>
      </form>

      <div className={styles.currentWeather}>
        <img
          className={styles.currentWeatherImg}
          src={`https://openweathermap.org/img/wn/${
            weather ? weather.weather[0].icon : ""
          }@4x.png`}
          alt="weather"
        />
        <h1 className={styles.currentTemp}>
          {Math.round(weather.main.temp)}°C
        </h1>
        <p className={styles.currentCity}>{weather.name}</p>
        <p className={styles.currentDay}>{weekDay}</p>
      </div>
      <div className={styles.currentWeatherTempInfo}>
        <div>
          <img
            style={{ filter: "grayscale(100%)" }}
            src={`https://openweathermap.org/img/wn/${
              weather ? weather.weather[0].icon : ""
            }@4x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].main}</p>
        </div>
        <div>
          <img src={temperatureMin} alt={temperatureMin} />
          <p>Min Temperature: {Math.round(weather.main.temp_min)}°C</p>
        </div>
        <div>
          <img src={temperatureMax} alt={temperatureMax} />
          <p>Max Temperature: {Math.round(weather.main.temp_max)}°C</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.additionalInfoContainer}>
          <img src={humidity} alt={humidity} />
          <div>
            <p>{weather.main.humidity}%</p>
            <h2>Humidity</h2>
          </div>
        </div>
        <div className={styles.additionalInfoContainer}>
          <img src={wind} alt={wind} />
          <div>
            <p>
              {Math.round(weather.wind.speed)}
              km/h
            </p>
            <h2>Wind Speed</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WeatherSearch };
