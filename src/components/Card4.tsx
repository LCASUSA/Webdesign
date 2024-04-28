import { FunctionComponent } from "react";
import styles from "./Card4.module.css";

export type Card4Type = {
  heading?: string;
  paragraph?: string;
};

const Card4: FunctionComponent<Card4Type> = ({ heading, paragraph }) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.paragraph}>{paragraph}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.button}>
          <img className={styles.icon} alt="" src="/icon-2.svg" />
        </div>
        <div className={styles.text}>Learn More</div>
      </div>
    </div>
  );
};

export default Card4;
