import './Menu.scss';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Error from '../../pages/Error';
import logo from "../../images/logoJg.png";
import Home from '../../pages/Home';

export default function Menu() {

  useEffect(() => {
    // When the user scrolls down, hide the navbar. When the user scrolls up or is on bottom of page, show the navbar
     let prevScrollpos = window.pageYOffset;
     const menu = document.getElementById("menu");

     window.onscroll = () => {
       let currentScrollPos = window.pageYOffset;

       if (prevScrollpos > currentScrollPos || window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1) {
         menu.style.top = "0";
       } else {
        menu.style.top = "-120px";
       }
       prevScrollpos = currentScrollPos;
     }
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
      <div className="hamburger hidden">
        <input type="checkbox" className="hamburger-check" name="hamburger" />
        <label htmlFor="hamburger">{/* None */}</label>
        <div className="hamburger-lines">
          <span></span>
          <span></span>
        </div>
      </div>

      <nav id="menu" className="menu">
        <div className="menu__inner">
          <div>
            <a href="#home">
              <img src={logo} className='h-[12rem] w-[14rem] absolute -top-8 md:-top-5 -translate-x-[5rem] md:-translate-x-[11rem]' alt="JG. Logo" />
            </a>
          </div>
          <div className="menu__inner--links">
          <span className="text font-white hover-underline-animation"><a href="#about">About</a></span>
            <span className="text font-white hover-underline-animation"><a href="#works-home">Works</a></span>
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
