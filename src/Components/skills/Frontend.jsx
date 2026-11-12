import React from "react";

const frontendSkills = [
  { name: "React.js", level: "Intermediate" },
  { name: "React Native", level: "Intermediate" },
  { name: "HTML5", level: "Intermediate" },
  { name: "CSS3", level: "Intermediate" },
  { name: "JavaScript (ES6+)", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        {[0, 1].map((groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {frontendSkills
              .slice(groupIndex * 4, groupIndex * 4 + 4)
              .map((skill, index) => (
                <div className="skills__data" key={skill.name}>
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
