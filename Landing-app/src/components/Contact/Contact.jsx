import "./Contact.scss";
import contactImage from "../../images/contact.webp";
import { useEffect, useState } from 'react';
import cn from 'classnames';

import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // --------------------------------------------------------
    // Follow mouse image
    // https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html

    let constrain = 60;
    let mouseOverContainer = document.querySelector('.contact-section');
    let layer = document.querySelector('.contact-img');

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(100vw) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    if (matchMedia('(pointer:fine)').matches) {
      mouseOverContainer.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([layer]);

        window.requestAnimationFrame(function () {
          transformElement(layer, position);
        });
      };
    }
  }, []);

  return (
    <section id="contact" className="contact-section border-t-[1px]" data-scroll-section>
      <div className="wrapper-rolling-text">
        <div className="rolling-text font-white title title-contact">
          <span>Get in touch · Get in touch ·&nbsp;</span>
        </div>
      </div>

      <div className="mid-container">
        <div className="contact-img-container">
          <img src={contactImage} alt="contact" className={cn("contact-img", { "is-reveal": reveal })} data-scroll data-scroll-target=".contact-img-container"></img>
        </div>

        <div className="links-container translate-y-20">
          <div className="links">
            <div className="link-title text">Socials</div>
            <div className="link text font-white hover-underline-animation">
              <a href="https://github.com/jegomezV" className="normal-case" target="_blank" rel="noreferrer">
                <FaGithub className="inline-block mr-5 mb-3 text-4xl" />
                Github
              </a>
            </div>
            <div className="link text font-white hover-underline-animation">
              <a href="https://www.linkedin.com/in/jegomez-v/" className="normal-case" target="_blank" rel="noreferrer">
                <FaLinkedin className="inline-block mr-5 mb-3 text-4xl" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="links">
            <div className="link-title text">Contact</div>
            <div className="link text font-white hover-underline-animation">
              <a href="mailto:jegomezvalencia@gmail.com" className="normal-case">
                <MdEmail className="inline-block mr-5 text-4xl" />
                jegomezvalencia@gmail.com
              </a>
            </div>
            <div className="link text font-white hover-underline-animation">
              <a href="tel:+573206309971">
                <FaPhone className="inline-block mr-5 text-4xl" />
                +57 320-630-9971
              </a>
            </div>
            <div className="link text font-white hover-underline-animation">&#8205;</div>
          </div>
        </div>
      </div>

      <div className="text designed-by font-white normal-case text-2xl">Developed by <span className="normal-case text-3xl">Juan Gómez</span></div>
    </section>
  );
}
