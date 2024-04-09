import { useState } from "react";
import styles from "./Card.module.css";

export default function Card({ imgSrc, title, desc }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.img}>{imgSrc}</div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.desc}>
        <p> {desc} </p>
      </div>
    </div>
  );
}
