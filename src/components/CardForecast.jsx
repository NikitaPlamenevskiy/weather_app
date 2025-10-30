import styles from "./CardForecast.module.css";

function CardForecast({ date, time, img, temp }) {
  return (
    <div className={`${"card"} ${styles.card__forecast}`}>
      <h3>{date}</h3>
      <p>{time}</p>
      <img src={img} alt="weather" />
      <p>{temp}°C</p>
    </div>
  );
}

export { CardForecast };
