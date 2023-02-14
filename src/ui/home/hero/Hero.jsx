import React from "react";
import "./hero.css";
import hero from "../../../assets/gym-02.png";
import dumble from "../../../assets/dumble.png";
const Hero = () => {
  return (
    <>
      <div className="gym__hero" id="home">
        <div className="gym__hero-content">
          <h2 data-aos='fade-up' data-aos-duration='1500'>
            Exercise is a key to a <span className="highlight">Healthy</span>{" "}
            Lifestyle
          </h2>
          <p data-aos='fade-up' data-aos-duration='1800' data-aos-delay='100'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            recusandae quos a nihil dolores dolorem!
          </p>
          <div className="gym__hero-btns" data-aos='fade-up' data-aos-duration='2000' data-aos-delay='200'>
            <button className="register-btn">Get Started</button>
            <button className="watch-btn">
              <span>
                <i class="ri-play-fill"></i>
              </span>
              Watch Video
            </button>
          </div>
        </div>
        <div className="gym__hero-img">
          <div className="gym__hero-img-wrapper">
            <div className="box-01">
              <div className="box-02">
                <div className="box-03">
                  <div className="box-img">
                    <img src={hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gym__hero-img-heart" data-aos='fade-right' data-aos-duration='1500'>
            <h5>Heart Rate</h5>
            <span>
              <i class="ri-heart-pulse-fill"></i>
            </span>
            <h5>2567 BPM</h5>
          </div>
          <div className="gym__hero-img-location" data-aos='fade-left' data-aos-duration='1500'>
            <span>
              <i class="ri-map-pin-2-fill"></i>
            </span>
            <h5>Find a new gym near you</h5>
          </div>
          <div className="gym__navbar-img gym__hero-img-dumble" data-aos='fade-down' data-aos-duration='1500'>
            <img src={dumble} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
