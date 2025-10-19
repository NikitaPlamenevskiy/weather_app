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
        <h2>Week</h2>
        <div className={styles.cardsContainer}>
          {weekInfo.map((day) => {
            return (
              <div className={`${styles.card} ${styles.dayCard}`}>
                <h3>{day.day}</h3>
                <img src={day.img} alt={day.img} />
                <p>{day.temperature}C</p>
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
            <h2>53</h2>
            <p>Good</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WeatherInfo };
