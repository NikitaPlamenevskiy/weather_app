import { Loader } from "./Loader";
import styles from "./WeatherInfo.module.css";

function WeatherInfo({ forecast, weather }) {
  return (
    <section className={styles.weatherInfoContainer}>
      <>
        <div className={styles.weekInfoContainer}>
          <h2>5 Days Forecast</h2>
          <div className={styles.cardsContainer}>
            {forecast.list.map((day, index) => {
              return (
                <div key={index} className={`${styles.card} ${styles.dayCard}`}>
                  <h3>
                    {new Date(day.dt * 1000).toLocaleString("en", {
                      weekday: "short",
                    })}
                  </h3>
                  <p>
                    {new Date(day.dt * 1000).toLocaleString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hourCycle: "h24",
                    })}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${
                      day !== null ? day.weather[0].icon : "Loading"
                    }@2x.png`}
                    alt={day.weather[0].description}
                  />
                  <p>{Math.round(day.main.temp)}°C</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.weekInfoContainer}>
          <h2>Today's Overview</h2>
          <div className={styles.cardsContainer}>
            <div className={`${styles.infoCard} ${styles.card}  `}>
              <h3>Air quality Index</h3>
              <h2>53</h2>
              <p>Good</p>
            </div>
            <div className={`${styles.infoCard} ${styles.card}  `}>
              <h3>UV Index</h3>
              <h2>53</h2>
              <p>Good</p>
            </div>
            <div className={`${styles.infoCard} ${styles.card} `}>
              <h3>Pressure</h3>
              <h2>{weather.main.pressure}</h2>
              <p>Good</p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export { WeatherInfo };
