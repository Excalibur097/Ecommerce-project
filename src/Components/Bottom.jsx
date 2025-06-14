import { Link } from "react-router-dom";


const Bottom = ()=>{
  return(
  <>
    <section id="newsletter" class="section-p1 section-m1">
      <div class="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>     
      </div>
      <div class="form">
        <input type="text" placeholder="Your email adress"/>
        <button class="normal">Sign Up</button>
      </div>
   </section>

    <footer class="section-p1">
      <div class="col">
        <img class="logo" src="img/logo.png" alt=""/>
        <h4>Contact</h4>
        <p><strong>Address:</strong> 563 Wellington Road, Street 32, San Fransisco</p>
        <p><strong>Phone:</strong> +01 222 3445/(+91) 444 5566</p>
        <p><strong>Hours:</strong> 10:00 - 17:00. Mon - Fri</p>
        <div class="follow">
          <h4>Follow us</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest"></i>
            <i class="fab fa-youtube"></i>          
          </div>
        </div>      
      </div>

      <div class="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View cart</a>
        <a href="#">My Wishlists</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div class="col install">
        <h4>install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
          <img src="img/pay/app.jpg" alt=""/>
          <img src="img/pay/play.jpg" alt=""/>
        </div>
        <p>Secured Payment Gateway</p>
        <img src="img/pay/pay.png" alt=""/>
      </div>

      <div class="copyright">
        <p>@ 2024 Rapha Chris HTML, CSS and JavaScript Personal Project</p>
      </div>


    </footer>
  </>
  )
}

export default Bottom;