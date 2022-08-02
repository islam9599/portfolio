import React from "react";
import Card from "../Card/Card";
import "./About.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.docx";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="About">
      {/* left side*/}
      <div className="awesome">
        <span style={darkMode ? { color: "white" } : { color: "black" }}>
          My knowledge on{" "}
        </span>
        <span>Web frontend</span>
        <span style={darkMode ? { color: "white" } : { color: "gray" }}>
          I am quite familiar with HTML, CSS, Javascript, ReactJS framework
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{
            background: "#ABF1FF94",
          }}
        ></div>
      </div>
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "24%" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"CSS, Bootstrap, Styled Components"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "24%" }}
          whileInView={{ left: "-6rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Javascript, ReactJs Framework"}
          />
        </motion.div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Projects"}
            detail={
              "Over 20 varios projects that Vanila javascript and RectJs were involved"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
