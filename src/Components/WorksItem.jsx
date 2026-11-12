
import React from "react";
import "./WorksItem.css";

const WorksItem = ({ item }) => {
  // Support both arrays and comma-separated strings.
  const techStack = Array.isArray(item.techStack)
    ? item.techStack
    : typeof item.techStack === "string"
      ? item.techStack.split(",").map((tech) => tech.trim()).filter(Boolean)
      : [];

  return (
    <div className="work__card">
      {item.image && (
        <img
          src={item.image}
          alt={item.title || "Project image"}
          className="work__img"
          loading="lazy"
        />
      )}

      <h3 className="work__title">{item.title}</h3>

      {item.description && (
        <p className="work__description">
          {item.description}
        </p>
      )}

      {techStack.length > 0 && (
        <div className="work__tech-section">
          <h4 className="work__tech-heading">Tech Stack</h4>

          <div className="work__tech-list">
            {techStack.map((tech, index) => (
              <span className="work__tech-tag" key={`${tech}-${index}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.link && (
        <a
          href={item.link}
          className="work__button"
          target="_blank"
          rel="noreferrer noopener"
        >
          View
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default WorksItem;
