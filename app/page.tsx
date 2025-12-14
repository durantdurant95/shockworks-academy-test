import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Section title</h1>
          <h2 className={styles.subtitle}>Your subtitle or description</h2>
          <p className={styles.text}>Here goes the content of the section.</p>
        </div>
      </section>
    </main>
  );
}
