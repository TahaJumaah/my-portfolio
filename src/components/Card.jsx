import styles from "./Card.module.css";
import { DiDocker } from "react-icons/di";
import { codeSVG } from "../assets/SVGs";
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
