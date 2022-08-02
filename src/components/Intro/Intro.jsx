import React from "react";
import Floating from "../FloatingDiv/Floating.jsx";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import MyImage from "../../img/myImage.jpg";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context.js";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : { color: "black" }}>
            Hi I Am
          </span>
          <span>Islombek</span>
          <span style={darkMode ? { color: "white" } : { color: "gray" }}>
            Frontend web developer trying to advance own skills in the coding
            world
          </span>
        </div>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <button className="button i-button">Hire men</button>
        </a>

        <div className="i-icons">
          <a href="https://github.com/islam9599">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/islombek-ergashev-6479681b7/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/eislombek9995/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt=""
        />

        <motion.div
          initial={{ lep: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <Floating image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <Floating
            image={Thumbup}
            txt1="HTML, CSS"
            txt2="Javascript, ReactJS"
          />
        </motion.div>
        {/* bluring div*/}
        <div className="blur" style={{ background: "rgb(236 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
