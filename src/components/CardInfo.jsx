import styles from "./CardInfo.module.css";

function CardInfo({ title, value, status, imgName }) {
  return (
    <>
      <div className={`${styles.card__info} ${"card"}`}>
        <h3>{title}</h3>
        <div>
          <h2>{value}</h2>
          <p>{status}</p>
          <img src={imgName} alt={imgName} />
        </div>
      </div>
    </>
  );
}

export { CardInfo };
