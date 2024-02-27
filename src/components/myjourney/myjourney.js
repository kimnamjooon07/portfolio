import React, { useState } from "react";
import "./myjourney.css";

const MyJourney = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="journey-container">
      <div className="about-container">
        <span className="text-animate">M</span>
        <span className="text-animate">y</span>
        <span className="space"></span>
        <span className="text-animate">J</span>
        <span className="text-animate">o</span>
        <span className="text-animate">u</span>
        <span className="text-animate">r</span>
        <span className="text-animate">n</span>
        <span className="text-animate">e</span>
        <span className="text-animate">y</span>
      </div>
      <div className="sub-nav">
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => handleTabChange("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => handleTabChange("experience")}
        >
          Experience
        </button>
      </div>
      <div className="journey-content">
        {activeTab === "education" ? (
          <div>
            <div className="education-box">
              <div className="campus-logo logoo"></div>
              <div className="name">
                Tribhuvan Universtiy, Thapathali Campus
                <div className="sub-name">
                  Bachelor in Computer Engineering | 2019-2024
                </div>
              </div>
            </div>
            <div className="education-box">
              <div className="college-logo logoo"></div>
              <div className="name">
                Capital College and Research Center
                <div className="sub-name">
                  Grade 11,12 | Graduated:2017-2018
                </div>
              </div>
            </div>
            <div className="education-box">
              <div className="school-logo logoo"></div>
              <div className="name">
                Mahendra Vidya Ashram{" "}
                <div className="sub-name">Grade 1-10 | Graduated:2016</div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="experience-box">
              <div className="wibd-logo logoo"></div>
              <div className="name">
                College Ambassador for WIBD
                <div className="sub-name">
                  Women in Big Data | Oct 2022-Nov 2023
                </div>
              </div>
            </div>

            <div className="experience-box">
              <div className="girlsintech-logo logoo"></div>
              <div className="name">
                Membership Engagement Manager
                <div className="sub-name">
                  Girls in Tech-Nepal | Jan 2021-Jun 2023{" "}
                </div>
              </div>
            </div>
            <div className="experience-box">
              <div className="uniquecenter-logo logoo"></div>
              <div className="name">
                Mathematics Instructor
                <div className="sub-name">
                  Unique Education Center | May 2023-Jan 2024
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJourney;
