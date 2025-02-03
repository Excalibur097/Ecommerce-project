import Navtops from "../Components/Navtop"


const Contacts = ()=>{

  return(
    <div>
      <Navtops activeComp = 'contact'/>
      <section id="contact-details" class="section-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i class="fa-solid fa-map"></i>
              <p>No 23 Wuse Zone 4 FCT Abuja</p>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <p>raphachris144@gmail.com</p>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <p>+2348074663163</p>
            </li>
            <li>
              <i class="fa-solid fa-clock"></i>
              <p>Monday to Saturday: 10:00am - 6:00pm</p>
            </li>
          </div>
        </div>
      </section>

      <section id="form-details" class="section-p1">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button class="normal">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contacts;
