import styles from "./myWork.module.css";
import { Projects } from "./dataBase";
import { openNewWindow } from "../assets/SVGs";

export default function Project({ position }) {
  const projectsItems = Projects.map((item) => {
    return (
      <div className={styles.projectContainer} key={item.key}>
        <div key={item.key} className={styles.projectDesc}>
          <a href={item.linkHref} target="_blank">
            <h2 className={styles.name}>
              {item.projectName}
              {openNewWindow}
            </h2>
          </a>
          <p className={styles.desc}>{item.desc}</p>
          <p className={styles.date}>{item.date}</p>
        </div>
        <div className={styles.img}>
          <a href={item.linkHref} target="_blank">
            <img
              src={item.projectImg}
              alt={item.desc + " designed and implemented by Taha Jumaah"}
            />
          </a>
        </div>
      </div>
    );
  });

  return <div className={styles.mainContainer}>{projectsItems}</div>;
}
