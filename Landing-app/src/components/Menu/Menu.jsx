import './Menu.scss';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Error from '../../pages/Error';
/* import logo from "../../images/logo.svg"; */
import Home from '../../pages/Home';

export default function Menu() {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger-check");
    const mobileWindow = document.querySelector(".mobile");
    const links = document.querySelectorAll(".mobile__links a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileWindow.classList.remove("opened");
        hamburger.checked = false;
      });
    });

    hamburger.addEventListener("change", () => {
      mobileWindow.classList.toggle("opened");
    });
  }, []);

  return (
    <section>
      <div className="hamburger">
        <input type="checkbox" className="hamburger-check" name="hamburger" />
        <label htmlFor="hamburger">{/* None */}</label>
        <div className="hamburger-lines">
          <span></span>
          <span></span>
        </div>
      </div>

      <nav id="menu" className="menu">
        <div className="menu__inner">
          <div className="menu__inner--logo">
            {/* <a href="#home">
              <img src={logo} alt="MT. Logo" width="80" height="45" />
            </a> */}
          </div>
          <div className="menu__inner--links">
            <span className="text font-white hover-underline-animation"><a href="#works-home">Works</a></span>
            <span className="text font-white hover-underline-animation"><a href="#about">About</a></span>
            <span className="text font-white hover-underline-animation"><a href="#contact">Contact</a></span>
          </div>
        </div>
      </nav>

      <div className="mobile">
        {/* Resto del contenido del menú */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  )
}
