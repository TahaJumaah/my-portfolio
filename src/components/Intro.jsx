import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <h1>Taha Jumaah</h1>
      <h2>Full Stack Web Developer</h2>

      <h2>
        <img src="src\assets\home_icon.svg"></img> Prague
      </h2>
    </div>
  );
}
