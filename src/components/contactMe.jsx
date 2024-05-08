import { FaGit, FaGithub, FaLinkedin, FaSquareEnvelope } from "react-icons/fa6";
import styles from "./aboutMe.module.css";
import Modal from "./Modal";
import { useState } from "react";
export default function ContactMe() {
  return (
    <div className={styles.contactMeContainer}>
      <div className={styles.ContactMe}>
        <div className={styles.img}>
          <img
            src="/assets/profile.jpg"
            alt="Profile picture of Taha Jumaah, a Full-Stack web developer based in Prague, with knowledge of HTML, CSS, JavaScript, React and NextJS"
          />
        </div>
        <div className={styles.contactInfo}>
          <h2>Get in touch</h2>
          <div>
            <a href="https://www.linkedin.com/in/tahajumaah/" target="_blank">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
          <div>
            <a href="https://github.com/tahajumaah" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="mailto:tahajumaah@outlook.com">
              <FaSquareEnvelope></FaSquareEnvelope>
            </a>
          </div>
          <a
            className="btn"
            style={{ width: "100%", height: "100%", marginTop: "20px" }}
            target="_blank"
            href="/assets/Taha_Jumaah_resume.pdf"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
