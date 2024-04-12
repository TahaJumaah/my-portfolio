import { useEffect } from "react";
import styles from "./aboutMe.module.css";
import { useState } from "react";
import { HomeIcon } from "../assets/SVGs";
export default function Intro() {
  const [jobTitle, setJobTitle] = useState(null);

  function changeTitle() {
    function interval() {
      setInterval(() => {
        setJobTitle("sameersInterval");
        console.log("sameersInterval");
        interval();
      }, 3000);
    }
    clearInterval(interval);
  }
  useEffect(changeTitle, []);
  return (
    <div className={styles.intro}>
      <h1>Taha Jumaah</h1>
      <h2>Full Stack {jobTitle} Developer</h2>

      <h2>{HomeIcon} Prague</h2>
    </div>
  );
}
