import React from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="span">
          <span style={darkMode ? { color: "white" } : { color: "black" }}>
            Get in touch
          </span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form action="">
          <input
            type="text"
            name="user-name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user-email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <button className="button c-button">Submit your response!</button>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
