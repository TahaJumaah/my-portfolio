import styles from "./Card.module.css";

export default function Card({ imgSrc, title, desc }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img}>
        <object
          data={imgSrc}
          type="image/svg+xml"
          className={styles.svgObject}
        ></object>
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.desc}>
        <p> {desc} </p>
      </div>
    </div>
  );
}
