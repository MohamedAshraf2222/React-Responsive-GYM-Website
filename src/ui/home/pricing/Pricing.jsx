import React, { useEffect, useState } from "react";
import "./pricing.css";
const Pricing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const condition = window.innerWidth < 1280;
      if (condition !== isMobile) {
        setIsMobile(condition);
      }
    });
  }, [isMobile]);
  
  const classname = isMobile ? {dataaos:'',dataaosduration:''} : {dataaos:'fade-up',dataaosduration:'1500'};
  
  return (
    <>
      <div className="gym__pricing" id="pricing">
        <div className="pricing-top">
          <h2>
            Gym <span className="highlight">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            recusandae enim dolorem sequi deleniti dicta!
          </p>
        </div>
        <div className="pricing-card-container">
          <div
            className="pricing-card"
            data-aos={classname.dataaos}
            data-aos-duration={classname.dataaosduration}
          >
            <div className="pricing-card-top">
              <h2>Regular Member</h2>
              <h2>
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access th the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
            </div>
            <button className="register-btn">Join now</button>
          </div>
          <div
            className="pricing-card pricing-card-02"
            data-aos={classname.dataaos}
            data-aos-duration={classname.dataaosduration}
          >
            <div className="pricing-card-top">
              <h2>Permium Member</h2>
              <h2>
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access th the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
            </div>
            <button className="register-btn">Join now</button>
          </div>
          <div
            className="pricing-card"
            data-aos={classname.dataaos}
            data-aos-duration={classname.dataaosduration}
          >
            <div className="pricing-card-top">
              <h2>Standard Member</h2>
              <h2>
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="pricing-card-bottom">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access th the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
            </div>
            <button className="register-btn">Join now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
