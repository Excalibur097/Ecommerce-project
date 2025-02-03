import Navtops from "../Components/Navtop";




const About = ()=>{

  return(
    <div>
      <Navtops activeComp = 'about'/>
      <section id="about-head" className="section-p1">
        <img src="img/about/a6.jpg" alt=""/>
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus 
            quis elementum. Phasellus sed efficitur dolor, et ultricies sapien.
            Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio.
            In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.Lorem ipsum dolor 
            sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse 
            rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. 
          </p>
          <abbr title="">
           Create stunning images with as much or as little control 
           as you like thanks to a choice of Basic and Creative Mode
          </abbr>
        </div>
      </section>

      <section id="about-app" class="section-p1">
        <h1>Download our <a href="">App</a></h1>
        <div class="video">
          <video autoplay muted loop src="img/about/1.mp4"></video>
        </div>
       </section>

    </div>
  )
}

export default About;