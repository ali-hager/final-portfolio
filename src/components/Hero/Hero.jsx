import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Ali Hager.</h1>
        <p className={styles.description}>
          I'm a fullstack developer. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ahager2013@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero-image"
        className={styles.heroImg}
      />
      <div className={StyleSheet.topBlur}></div>
      <div className={StyleSheet.bottomBlur}></div>
    </section>
  );
};
