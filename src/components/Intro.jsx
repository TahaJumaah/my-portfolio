import styles from "./aboutMe.module.css";
import { useState } from "react";
export default function Intro() {
  const [jobTitle, setJobTitle] = useState(null);

  return (
    <div className={styles.intro}>
      <h1>Taha Jumaah</h1>
      <h2>Full Stack {jobTitle} Developer</h2>
    </div>
  );
}
