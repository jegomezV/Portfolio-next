import './Hero.scss';
import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import SplitText from '../../utils/SplitText3.min.js'
import hero from "../../images/juanPhoto.webp";
import cn from 'classnames';

export default function Hero() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

  useEffect(() => {
    // // --------------------------------------------------------
    // // Text appear animation
    // const split = new SplitText("#hero-titl e", {
    //   type: "lines",
    //   linesClass: "lineChildren",
    // });

    // new SplitText("#hero-title", {
    //   type: "lines",
    //   linesClass: "lineParent",
    // });

    // gsap.to(split.lines, {
    //   duration: .8,
    //   y: 0,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: "var(--custom-ease-out)",
    // });
  }, []);

  return (
    <section id="home" className="main-hero-section" data-scroll-section>
      <div className="container-title flex flex-col">
        <div className='flex flex-row items-start'>
          <div className='h-2 w-36'></div>
          <div className="text text-24 font-neutral ml-1 mb-24 tablet-ml-0 tablet-mb-0 flex flex-col items-start" data-scroll data-scroll-speed="-1">I'm a</div>
        </div>
        <h1 id="hero-title" className="font-white flex flex-col items-center ml-1 tablet-ml-0 title title-hero" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">
          Software Developer
        </h1>
        <div className='flex flex-row items-start'>
          <div className='h-2 w-36'></div>
          <div className="mx-auto text-24 font-neutral ml-1 tablet-ml-0 from-france" data-scroll data-scroll-speed="-1">From Colombia</div>
        </div>

      </div>

      <div className={cn("hero-image", { "is-reveal": reveal })}>
        <img src={hero} alt="hero" data-scroll data-scroll-speed="-1" data-scroll-target=".hero-image"></img>
      </div>

      <div className="scroll-text text font-white">Scroll to explore</div>
    </section>
  )
}
