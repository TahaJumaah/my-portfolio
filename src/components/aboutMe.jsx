import styles from "./aboutMe.module.css";
import Card from "./Card";
import { dataBase } from "./dataBase";
import Intro from "./Intro";
export default function AboutMe() {
  const cards = dataBase.map((item) => {
    return (
      <Card
        key={item.key}
        imgSrc={item.imgSrc}
        title={item.title}
        desc={item.desc}
      ></Card>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <Intro></Intro>
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}
