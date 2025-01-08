import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section["title"]} className="experience-section">
              {/* Eğer başlık "Work" değilse, başlığı göster */}
              {section["title"] !== "Work" && (
                <h2
                  style={{
                    backgroundColor: `${theme.body}`,
                    border: `1px solid`,
                    borderRadius: `5px`,
                    borderColor: `${theme.headerColor}`,
                    padding: "10px",
                    marginBottom: "15px",
                    fontFamily: "Google Sans Regular",
                    color: `${theme.text}`,
                  }}
                >
                  {section["title"]}
                </h2>
              )}
              <div className="experience-cards">
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
