import styles from "./WeatherInfo.module.css";
import windy from "../assets/images/windy.svg";

const weekInfo = [
  {
    day: "Sun",
    img: windy,
    temperature: 20,
  },
  {
    day: "Mon",
    img: windy,
    temperature: 24,
  },
  {
    day: "Tue",
    img: windy,
    temperature: 26,
  },
  {
    day: "Wed",
    img: windy,
    temperature: 30,
  },
  {
    day: "Thu",
    img: windy,
    temperature: 10,
  },
  {
    day: "Fri",
    img: windy,
    temperature: 15,
  },
  {
    day: "Sat",
    img: windy,
    temperature: 5,
  },
];

function WeatherInfo() {
  return (
    <section className={styles.weatherInfoContainer}>
      <div className={styles.weekInfoContainer}>
        <h1>Week</h1>
        <div className={styles.cardsContainer}>
          {weekInfo.map((day) => {
            return (
              <div className={styles.dayCard}>
                <h2>{day.day}</h2>
                <img src={day.img} alt={day.img} />
                <p>{day.temperature}C</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { WeatherInfo };
