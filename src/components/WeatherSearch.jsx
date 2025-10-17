import styles from "./WeatherSearch.module.css";
import weatherImage from "../assets/images/weather.png";
import cloudRain from "../assets/images/cloudRain.png"
import temperatureMin from "../assets/images/temperatureMin.png"
import temperatureMax from "../assets/images/temperatureMax.png"


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
        <img src={cloudRain} alt={cloudRain} />
        <p>Light Rain</p>
        <img src={temperatureMin} alt={temperatureMin} />
        <p>Min Temperature - 28°C</p>
        <img src={temperatureMax} alt={temperatureMax} />
        <p>Max Temperature - 31°C</p>
      </div>
    </section>
  );
}

export { WeahterSearch };
