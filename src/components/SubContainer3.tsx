import { FunctionComponent } from "react";
import styles from "./SubContainer3.module.css";

const SubContainer3: FunctionComponent = () => {
  return (
    <div className={styles.subContainer}>
      <div className={styles.textContainer}>
        <div className={styles.heading}>Clients</div>
        <div className={styles.text}>200+</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heading1}>PROJECTS</div>
        <div className={styles.text}>280+</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heading1}>HAPPY CLIENTS</div>
        <div className={styles.text}>100%</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heading1}>FOLLOWER</div>
        <div className={styles.text}>420K</div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.heading1}>Years Of Experience</div>
        <div className={styles.text}>10+</div>
      </div>
      <div className={styles.button}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} alt="" src="/icon-2.svg" />
        </div>
        <div className={styles.text5}>Know More</div>
      </div>
    </div>
  );
};

export default SubContainer3;
