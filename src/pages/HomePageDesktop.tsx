import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import FrameComponent3 from "../components/FrameComponent3";
import SubContainer3 from "../components/SubContainer3";
import Container2 from "../components/Container2";
import Container1 from "../components/Container1";
import FrameComponent2 from "../components/FrameComponent2";
import Container from "../components/Container";
import SubContainer2 from "../components/SubContainer2";
import FrameComponent1 from "../components/FrameComponent1";
import Form from "../components/Form";
import SubContainer from "../components/SubContainer";
import FrameComponent from "../components/FrameComponent";
import styles from "./HomePageDesktop.module.css";

const HomePageDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homePageDesktop}>
      <section className={styles.navbarParent}>
        <Navbar />
        <FrameComponent3 />
        <SubContainer3 />
      </section>
      <Container2 />
      <Container1 />
      <FrameComponent2 />
      <Container />
      <section className={styles.navbarParent}>
        <SubContainer2
          heading="Frequently Asked Questions"
          text="View All"
          propWidth="1545px"
          propMinWidth="97px"
          propDisplay="inline-block"
        />
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <Form />
        </div>
      </section>
      <section className={styles.subContainerGroup}>
        <SubContainer />
        <div className={styles.subContainer}>
          <div className={styles.footerLinkSet}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet2}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet2}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet2}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet2}>Follow Us on Social Media</div>
          <div className={styles.footerLinkSet1}>
            <div className={styles.shape} />
          </div>
          <div className={styles.footerLinkSet10}>
            Follow Us on Social Media
          </div>
        </div>
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomePageDesktop;
