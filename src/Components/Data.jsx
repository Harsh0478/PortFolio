import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Data.css"; // Import your CSS
import ScrollDown from "./ScrollDown";

const Data = () => {
  const [text] = useTypewriter({
    words: ["Software Developer", "Full Stack Engineer", "Android Developer"],
    loop: 0,
  });

  return (
    <section className="home container">
      <div className="home__content">
        <h1 className="home__title">
          Harsh Rathod
          <span className="home__emoji">👋</span>
        </h1>

        <h2 className="home__subtitle">
          {text}
          <Cursor />
        </h2>

        <p className="home__description">
          Full-Stack Web & Mobile Developer | MERN (MongoDB, Express, React,
          Node.js) | React Native | JavaScript (ES6+) | Tailwind CSS | REST APIs
        </p>

        <div className="home__cta">
          <a href="#contact" className="btn btn-primary home__button">
            Say Hello
            <svg
              className="btn__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.22 21.935C13.04 21.935 11.37 21.105 10.05 17.135L9.33 14.975 7.17 14.255C3.21 12.935 2.38 11.265 2.38 10.085 2.38 8.915 3.21 7.235 7.17 5.905L15.66 3.075C17.78 2.365 19.55 2.575 20.64 3.655 21.73 4.735 21.94 6.515 21.23 8.635L18.4 17.125C17.07 21.105 15.4 21.935 14.22 21.935ZM7.64 7.335C4.86 8.265 3.87 9.365 3.87 10.085 3.87 10.805 4.86 11.905 7.64 12.825L10.16 13.665C10.38 13.735 10.56 13.915 10.63 14.135L11.47 16.655C12.39 19.435 13.5 20.425 14.22 20.425 14.94 20.425 16.04 19.435 16.97 16.655L19.8 8.165C20.31 6.625 20.22 5.365 19.57 4.715 18.92 4.065 17.66 3.985 16.13 4.495L7.64 7.335Z" />
            </svg>
          </a>

          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Data;
