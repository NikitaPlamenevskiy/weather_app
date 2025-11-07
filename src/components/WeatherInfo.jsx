import { CardInfo } from "./CardInfo";
import { CardForecast } from "./CardForecast";
import barometer from "../assets/images/barometer.svg";
import airpollution from "../assets/images/air-pollution.svg";
import sunrise from "../assets/images/sunrise.svg";
import sunset from "../assets/images/sunset.svg";
import uv from "../assets/images/uv.svg";
import styles from "./WeatherInfo.module.css";

function WeatherInfo({ forecast, weather, airPollution, airQuality, uvIndex }) {
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
                day: "numeric",
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
          status={airQuality}
          imgName={airpollution}
        />
        <CardInfo
          title="Pressure (hpa)"
          value={weather.main.pressure}
          status="Good"
          imgName={barometer}
        />
        <CardInfo
          title="UV Index"
          value={Math.floor(uvIndex.result.uv)}
          status="Good"
          imgName={uv}
        />
      </div>
      <div className={`${styles.card_sun} ${"card"} `}>
        <h3>Sunrise & Sunset</h3>
        <div className={styles.sun__info}>
          <img src={sunrise} alt={sunrise} />
          <div>
            <p>Sunrise</p>
            <h2>
              {new Date(weather.sys.sunrise * 1000).toLocaleString("en", {
                hour: "numeric",
                minute: "2-digit",
                hourCycle: "h24",
              })}
            </h2>
          </div>
        </div>
        <div className={styles.sun__info}>
          <img src={sunset} alt={sunset} />
          <div>
            <p>Sunset</p>
            <h2>
              {new Date(weather.sys.sunset * 1000).toLocaleString("en", {
                hour: "numeric",
                minute: "2-digit",
                hourCycle: "h24",
              })}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WeatherInfo };
