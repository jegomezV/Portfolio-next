import './About.scss';
import about from "../../images/about.webp";
import cn from 'classnames';
import { useState } from 'react';

import col from '../../assets/FlagCol.webp'

export default function AboutWorks() {
  const [reveal, setReveal] = useState(false);

  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="font-white ml-1 tablet-m-0 title-about text-[6rem]" data-scroll data-scroll-direction="vertical" data-scroll-speed="2">
        Hi, I'm Juan, a passionate software developer
        <span className="inline-flex items-center title-about">
        in Colombia. 
          <img src={col} alt="hero" data-scroll data-scroll-speed="-0.2" data-scroll-direction="horizontal" className='h-[5rem] hover:scale-105 hover:duration-300 rounded-lg ml-6 mt-40 md:mt-2' />
        </span>
        <br />
        I like to learn new things every day and challenge myself with new works.
      </div>
      <div className="font-neutral ml-1 mt-24 tablet-ml-0 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Check out<br></br>my projects &#8594; <a className="font-white hover-underline-animation" href="#works-home">HERE</a></div>

      <div className="about-canvas mt-160 ml-4 tablet:ml-0 flex justify-end">
        <img src={about} alt="about illustration" className={cn("about-image", { "is-reveal": reveal }, "w-full h-auto")} data-scroll data-scroll-speed="-2" data-scroll-target=".about-canvas"></img>
      </div>

      <div className="about-attached ml-2 tablet-ml-0 tablet-mr-0">
        <div className="about-attached-text text-slate-200/80 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">I'm also a</div>
        <div className="about-attached-title font-white title title-section text-right" data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Frontend<br></br>Developer</div>
      </div>
    </section>
  )
}
