import styles from "./WeatherSearch.module.css";
import weatherImage from "../assets/images/weather.png";
import cloudRain from "../assets/images/cloudRain.png";
import temperatureMin from "../assets/images/temperatureMin.png";
import temperatureMax from "../assets/images/temperatureMax.png";
import wind from "../assets/images/wind.svg";
import humidity from "../assets/images/water.svg";

function WeahterSearch() {
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
        <img className={styles.currentWeatherImg} src={weatherImage} />
        <h1 className={styles.currentTemp}>30C</h1>
        <p className={styles.currentCity}>Tomsk</p>
        <p className={styles.currentDay}>Monday</p>
      </div>
      <div className={styles.currentWeatherTempInfo}>
        <div>
          <img src={cloudRain} alt={cloudRain} />
          <p>Light Rain</p>
        </div>
        <div>
          <img src={temperatureMin} alt={temperatureMin} />
          <p>Min Temperature: 28°C</p>
        </div>
        <div>
          <img src={temperatureMax} alt={temperatureMax} />
          <p>Max Temperature: 31°C</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.additionalInfoContainer}>
          <img src={humidity} alt={humidity} />
          <div>
            <p>83%</p>
            <h2>Humiduty</h2>
          </div>
        </div>
        <div className={styles.additionalInfoContainer}>
          <img src={wind} alt={wind} />
          <div>
            <p>6km/h</p>
            <h2>Wind Speed</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WeahterSearch };
