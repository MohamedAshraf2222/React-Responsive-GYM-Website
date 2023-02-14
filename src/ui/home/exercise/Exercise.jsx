import React from "react";
import "./exercise.css";
import lunges from "../../../assets/lunges.png";
import yogapose from "../../../assets/yoga-pose.png";
import extended from "../../../assets/extended.png";

const Exercise = () => {
  const exercises = [
    {
      path: lunges,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium.",
      header: "Healthy Life",
    },
    {
      path: yogapose,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium.",
      header: "Increased Flexibility",
    },
    {
      path: extended,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium.",
      header: "Reducing Blood Pressure",
    },
  ];
  return (
    <>
      <div className="gym__exercise" id="schedule">
        <h2>
          Benefits of <span className="highlight">Exercise</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam
          nostrum ut esse alias quibusdam voluptatum vel magnam omnis animi.
        </p>
        <div className="gym__exercise-content">
          {exercises.map((exercise) => (
            <>
              <div className="gym__exercise-box"data-aos='zoom-in' data-aos-duration='1500'>
                <div className="exercise-icon">
                  <span>
                    <img src={exercise.path} alt="exercise" />
                  </span>
                </div>
                <div className="exercise-text">
                  <h5>{exercise.header}</h5>
                  <p>{exercise.text}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercise;
