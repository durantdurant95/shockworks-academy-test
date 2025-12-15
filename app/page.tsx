import Carousel from "./components/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h1 className={styles.introText}>What is the</h1>
          <h2 className={styles.specialityText}>Speciality Of Us?</h2>
        </div>
      </section>
      <Carousel />
    </main>
  );
}
