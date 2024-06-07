import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:myemail@email.com">ahager2013@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin-icon"
          />
          <a href="https://www.linkedin.com/in/ali-hager/">
            linkedin.com/ali-hager
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/ali-hager">github.com/ali-hager</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
