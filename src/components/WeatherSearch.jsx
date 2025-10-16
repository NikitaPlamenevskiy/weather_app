import styles from "./WeatherSearch.module.css";

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
    </section>
  );
}

export { WeahterSearch };
