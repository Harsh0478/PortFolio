import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollHeader, setScrollHeader] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrollHeader ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Portfolio
        </a>

        <div className={toggleMenu ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { href: "#home", icon: "uil-estate", label: "Home" },
              { href: "#about", icon: "uil-user", label: "About" },
              { href: "#skills", icon: "uil-file-alt", label: "Skills" },
              { href: "#services", icon: "uil-briefcase-alt", label: "Services" },
              { href: "#portfolio", icon: "uil-scenery", label: "Projects" },
              { href: "#contact", icon: "uil-message", label: "Contact" },
            ].map((item) => (
              <li className="nav__item" key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.href)}
                  className={
                    activeNav === item.href ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggleMenu(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
