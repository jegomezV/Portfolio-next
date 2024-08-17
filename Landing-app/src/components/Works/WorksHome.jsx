import './Works.scss';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Importa las imágenes al inicio del archivo
import thumbnailWork1 from '../../images/projects/fashionWeb.webp';
import thumbnailWork2 from '../../images/projects/RE-management.webp';
import thumbnailWork3 from '../../images/projects/HD-assistante.webp';
import thumbnailWork4 from '../../images/projects/Self-branding.webp';
import thumbnailWork6 from '../../images/projects/Jasmin-bonheur.webp';
import thumbnailWork7 from '../../images/projects/Maylevia.webp';
import thumbnailWork8 from '../../images/projects/qencyLanding1.webp';

export default function WorksHome() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

  useEffect(() => {
    // Aquí puedes añadir la lógica de animación con GSAP si lo necesitas
  }, []);

  const works = [
    {
      "title": "Q-ency Landing page",
      "thumbnail": thumbnailWork8,
      "detail": "UI / UX Design, Development, Webflow",
      "link": "https://www.q-encysoft.com",
    },
    {
      "title": "Fashion Website",
      "thumbnail": thumbnailWork1,
      "detail": "UI / UX Design, Development, Webflow",
      "link": "https://imbeauty.vercel.app",
    }/* ,
    {
      "title": "Jasmin Bonheur",
      "thumbnail": thumbnailWork4,
      "detail": "UI / UX Design, Development",
      "link": "",
    },
    {
      "title": "Self Branding",
      "thumbnail": thumbnailWork7,
      "detail": "UI / UX Design, Development",
      "link": "",
    },
    {
      "title": "HD Assistante",
      "thumbnail": thumbnailWork3,
      "detail": "UI / UX Design",
      "link": "",
    },
    {
      "title": "Real Estate",
      "thumbnail": thumbnailWork2,
      "detail": "UI / UX Design",
      "link": "",
    },
    {
      "title": "LOL Universe",
      "thumbnail": thumbnailWork6,
      "detail": "UI / UX Design",
      "link": "",
    } */
  ]

  const workSliderContent = works.map((work, key) =>
      <SwiperSlide key={key} className={cn("work-item", { "is-reveal": reveal })}>
        <a href={work.link} target="_blank" rel="noreferrer">
          <div className="work-canvas">
            <img className="work-item-image" src={work.thumbnail} alt={work.title} data-scroll data-scroll-speed="-2" data-scroll-target=".work-canvas"></img>
          </div>
          <div className="work-description">
            <h3 className="text-24 font-white">{work.title}</h3>
            <p className="work-detail font-neutral text">{work.detail}</p>
          </div>
        </a>
      </SwiperSlide>
  )

  return (
    <section id="works-home" className={cn("home-works-section", { "is-reveal": reveal })} data-scroll-section>
      <h2 ref={ref} id="works-title" className={cn("works-title title title-works font-white", { "is-reveal": reveal })} data-scroll data-scroll-direction="vertical" data-scroll-speed="2">Recent Works</h2>
      <h2 data-scroll data-scroll-speed="3.5" data-scroll-direction="horizontal" className='text-white absolute right-32 top-96 normal-case text-5xl title-about'>&lt;&lt; Slide to left</h2>
      <Swiper slidesPerView={"auto"} className="work-slider">
        {workSliderContent}
      </Swiper>
    </section>
  )
}
