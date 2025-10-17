import styles from "./WeatherSearch.module.css";
import weatherImage from "../assets/images/Weather_image.png"

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
        <img className={styles.currentWeatherImg} src={weatherImage}/>
        <h1 className={styles.currentTemp}>30C</h1>
        <p className={styles.currentCity}>Tomsk</p>
        <p className={styles.currentDay}>Monday</p>
      </div>
    </section>
  );
}

export { WeahterSearch };
