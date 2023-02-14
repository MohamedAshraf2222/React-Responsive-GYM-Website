import React from "react";
import "./start.css";
import start from "../../../assets/trainer.png";

const Start = () => {
  return (
    <>
      <div className="gym__start" id="classes">
        <div
          className="gym__start-img"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <img src={start} alt="start" />
        </div>
        <div
          className="gym__start-content"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2>
            Ready to make a <span className="highlight">change?</span>{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            pariatur nobis, quod error porro, a doloremque voluptates sint sed
            quam, beatae suscipit asperiores debitis temporibus aliquid
            voluptas! Provident, quae unde.
          </p>
          <button className="register-btn">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Start;
