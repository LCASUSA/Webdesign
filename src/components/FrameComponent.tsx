import { FunctionComponent } from "react";
import Card from "./Card";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <footer className={styles.containerParent}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Card
            icon="/icon-26.svg"
            heading="INstagram"
            paragraph="Share visually appealing snippets of our latest web projects."
          />
          <div className={styles.card}>
            <div className={styles.container1}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <div className={styles.logoContainer} />
                  <img
                    className={styles.capa2Icon}
                    loading="lazy"
                    alt=""
                    src="/capa-2.svg"
                  />
                </div>
              </div>
              <div className={styles.button}>
                <img className={styles.icon1} alt="" src="/icon-7.svg" />
              </div>
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>Twitter</h2>
              <div className={styles.paragraph}>
                Tweet about interesting coding challenges you've overcome.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <Card
            icon="/icon-29.svg"
            heading="Dribbble"
            paragraph="Showcase design elements of our web projects."
          />
          <Card
            icon="/icon-31.svg"
            heading="Behance"
            paragraph="Create detailed presentations for our projects."
          />
        </div>
      </div>
      <div className={styles.subContainerParent}>
        <div className={styles.subContainer2}>
          <div className={styles.container2}>
            <b className={styles.heading1}>Home</b>
            <div className={styles.linksContainer}>
              <div className={styles.textButton}>Why Us</div>
              <div className={styles.textButton}>About Us</div>
              <div className={styles.textButton}>Testimonials</div>
              <div className={styles.textButton}>FAQ’s</div>
            </div>
          </div>
          <div className={styles.container2}>
            <b className={styles.heading1}>Services</b>
            <div className={styles.linksContainer}>
              <div className={styles.textButton}>Web Development</div>
              <div className={styles.textButton}>App Development</div>
              <div className={styles.textButton}>Web Design</div>
              <div className={styles.textButton}>Digital Marketing</div>
            </div>
          </div>
          <div className={styles.container2}>
            <b className={styles.heading1}>Projects</b>
            <div className={styles.linksContainer}>
              <div className={styles.textButton}>Klothink</div>
              <div className={styles.textButton}>Zenith</div>
              <div className={styles.textButton}>Novus</div>
              <div className={styles.textButton}>Apex</div>
            </div>
          </div>
          <div className={styles.container2}>
            <b className={styles.heading1}>Blogs</b>
            <div className={styles.linksContainer}>
              <div className={styles.textButton}>Business</div>
              <div className={styles.container6}>
                <div className={styles.textButton13}>Design</div>
                <div className={styles.subContainer3}>
                  <div className={styles.socialMediaName}>Soon</div>
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.textButton14}>Development</div>
                <div className={styles.subContainer4}>
                  <div className={styles.socialMediaName}>Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer5}>
          <div className={styles.textContainer1}>
            <div className={styles.heading5}>Newsletter</div>
            <h2 className={styles.text1}>Subscribe To our Newsletter</h2>
          </div>
          <div className={styles.container8}>
            <div className={styles.inputField}>
              <div className={styles.emailPlaceholder}>Enter your email</div>
            </div>
            <div className={styles.button}>
              <img className={styles.icon1} alt="" src="/icon-7.svg" />
            </div>
          </div>
        </div>
        <div className={styles.subContainer6}>
          <div className={styles.copyright}>
            © 2024 NextGen. All rights reserved.
          </div>
          <div className={styles.textButtonParent}>
            <div className={styles.textButton15}>{`Terms & Conditions`}</div>
            <div className={styles.divider} />
            <div className={styles.textButton15}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
