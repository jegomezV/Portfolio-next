import './Works.scss';
import realEstateExterior from "../../images/real-estate-exterior.webp";
import realEstateExteriorThumbnail from "../../images/real-estate-exterior-thumbnail.webp";

export default function NextWork() {
  return (
    <section id="next-work" className="next-work-section" data-scroll-section>
      <img src={realEstateExterior} alt="next work background" className="next-work-bg" />

      <div className="wrapper-rolling-text">
        <div className="rolling-text title-200 font-white">
          <span>Self Branding · Self Branding ·&nbsp;</span>
        </div>
      </div>

      <div className="mid-container">
        <div className="next-work-container">
          <div className="next-work-img-container">
            <img src={realEstateExteriorThumbnail} alt="next work illustration" className="next-work-img" data-scroll />
          </div>
          <div className="text font-white-grey font-weight-400 hover-underline-animation">Next Project</div>
        </div>
      </div>

      <div className="links">
        <div className="link-title text font-neutral-grey">Socials</div>
        <div className="link text hover-underline-animation font-white font-weight-400">
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">Dribbble</a>
        </div>
        <div className="link text hover-underline-animation font-white font-weight-400">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="link text hover-underline-animation font-white font-weight-400">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
