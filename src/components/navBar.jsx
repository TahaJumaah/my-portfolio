import styles from "./navBar.module.css";

export default function NavBar({ changeView }) {
  return (
    <div className={styles.navBar}>
      <p onClick={changeView} className={styles.navItem}>
        About Me
      </p>
      <div id={styles.logoContainer}>
        <p onClick={changeView} id={styles.logo}>
          TJ
        </p>
      </div>
      <p onClick={changeView} className={styles.navItem}>
        My Work
      </p>
    </div>
  );
}
