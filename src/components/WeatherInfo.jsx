import { CardInfo } from "./CardInfo";
import { CardForecast } from "./CardForecast";
import barometer from "../assets/images/barometer.svg";
import airpollution from "../assets/images/air-pollution.svg";
import styles from "./WeatherInfo.module.css";

function WeatherInfo({
  forecast,
  weather,
  airPollution,
  airStatus
}) {
  return (
    <section className={styles.container}>
      <h2>5 Days Forecast</h2>
      <div className={styles.cards__container}>
        {forecast.list.map((day, index) => {
          return (
            <CardForecast
              key={index}
              date={new Date(day.dt * 1000).toLocaleString("en", {
                weekday: "short",
              })}
              time={new Date(day.dt * 1000).toLocaleString("en", {
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: "h24",
              })}
              img={`https://openweathermap.org/img/wn/${
                day ? day.weather[0].icon : ""
              }@2x.png`}
              temp={Math.round(day.main.temp)}
            />
          );
        })}
      </div>

      <h2>Today's Overview</h2>
      <div className={styles.cards__container}>
        <CardInfo
          title="Air Quality Index"
          value={airPollution.list[0].main.aqi}
          status={airStatus}
          imgName={airpollution}
        />
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
