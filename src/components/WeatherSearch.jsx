import styles from "./WeatherSearch.module.css";
import cloudRain from "../assets/images/cloudRain.png";
import temperatureMin from "../assets/images/temperatureMin.png";
import temperatureMax from "../assets/images/temperatureMax.png";
import wind from "../assets/images/wind.svg";
import humidity from "../assets/images/water.svg";

function WeatherSearch({ weather }) {
  return (
    <section className={styles.searchContainer}>
      <form className={styles.searchForm}>
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
            weather !== null ? weather.weather[0].icon : "Loading"
          }@4x.png`}
        />
        <h1 className={styles.currentTemp}>
          {weather !== null ? `${Math.round(weather.main.temp)}°C` : "Loading"}
        </h1>
        <p className={styles.currentCity}>
          {weather !== null ? weather.name : "Loading"}
        </p>
        <p className={styles.currentDay}>Monday</p>
      </div>
      <div className={styles.currentWeatherTempInfo}>
        <div>
          <img src={cloudRain} alt={cloudRain} />
          <p>{weather !== null ? weather.weather[0].description : "Loading"}</p>
        </div>
        <div>
          <img src={temperatureMin} alt={temperatureMin} />
          <p>
            Min Temperature:{" "}
            {weather !== null ? Math.round(weather.main.temp_min) : "Loading"}°C
          </p>
        </div>
        <div>
          <img src={temperatureMax} alt={temperatureMax} />
          <p>
            Max Temperature:{" "}
            {weather !== null ? Math.round(weather.main.temp_max) : "Loading"}°C
          </p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.additionalInfoContainer}>
          <img src={humidity} alt={humidity} />
          <div>
            <p>{weather !== null ? weather.main.humidity : "Loading"}%</p>
            <h2>Humiduty</h2>
          </div>
        </div>
        <div className={styles.additionalInfoContainer}>
          <img src={wind} alt={wind} />
          <div>
            <p>
              {weather !== null ? Math.round(weather.wind.speed) : "Loading"}{" "}
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
