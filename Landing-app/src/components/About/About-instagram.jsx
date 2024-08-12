import './About.scss';

export default function AboutInstagram() {
  return (
    <section id="about-instagram" className="about-instaram-section py-64 px-0  -ml-5" data-scroll-section>
      <div data-scroll data-scroll-speed="0" className="font-white ml-5 tablet-m-0 title-about text-[2.5rem] w-screen border-[1px] border-white/50 p-20 shadow-[0_5px_30px_-15px_rgba(255,255,255,1)]" data-scroll data-scroll-direction="vertical" data-scroll-speed="3">
        <span className='font-bold normal-case text-[3rem]'>As a software developer</span>,<span className='text-[4.5rem]'> 💻</span><br />
        <br /> I specialize in implementing design patterns in object-oriented and functional paradigms, optimizing code maintainability and efficiency. <span className='text-[3.2rem]'>🛠️</span>
        <br /> I have experience in managing and orchestrating microservices, designing robust and scalable distributed systems.<span className='text-[3.2rem]'>🌐</span>
        <br /> I am proficient in various architectures, including hexagonal architecture (ports and adapters), monolithic architecture, and layered architecture, each adapted to different project needs. <span className='text-[3.2rem]'>🏗️</span>
        <br /> My commitment to best development practices ensures that each project is built on a solid foundation of quality and efficiency. 📈
        <br /> I keep my skills and knowledge at the forefront of technological trends, developing and deploying solutions using modern technologies and advanced software development practices. <span className='text-[3.2rem]'>🚀</span>
      </div>
      <div className='flex flex-col items-center'>
        <div className="font-neutral ml-5 mt-24 tablet-ml-0 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">
          Check out<br />my LinkedIn &#8594; <a className="font-white hover-underline-animation" href="https://www.linkedin.com/in/jegomez-v/" target="_blank" rel="noreferrer">HERE</a> 🔗
        </div>
      </div>

    </section>
  )
}
