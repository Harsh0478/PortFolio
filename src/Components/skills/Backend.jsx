import React from "react";

const backendSkills = [
  { name: "MongoDB", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "REST APIs", level: "Intermediate" },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        {[0, 1].map((groupIndex) => (
          <div className="skills__group" key={groupIndex}>
            {backendSkills
              .slice(groupIndex * 4, groupIndex * 4 + 4)
              .map((skill) => (
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

export default Backend;
