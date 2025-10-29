import { CardInfo } from "./CardInfo";
import barometer from "../assets/images/air-pollution.svg";
import styles from "./WeatherInfo.module.css";

function WeatherInfo({ forecast, weather }) {
  return (
    <section className={styles.weatherInfoContainer}>
      <h2>5 Days Forecast</h2>
      <div className={styles.cardsContainer}>
        {forecast.list.map((day, index) => {
          return (
            <div key={index} className={`${"card"} ${styles.dayCard}`}>
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
                  day ? day.weather[0].icon : ""
                }@2x.png`}
                alt='weather'
              />
              <p>{Math.round(day.main.temp)}°C</p>
            </div>
          );
        })}
      </div>

      <h2>Today's Overview</h2>
      <div className={styles.cardsContainer}>
        <CardInfo
          title="Pressure (hpa)"
          value={weather.main.pressure}
          status="Good"
          imgName={barometer}
        />
      </div>
    </section>
  );
}

export { WeatherInfo };
