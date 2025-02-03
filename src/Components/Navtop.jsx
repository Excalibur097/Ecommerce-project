import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../Contexts/MainContext";
import {auth} from "../firebase";
import { signOut } from "firebase/auth";

const Navtops = (props)=>{
  const activeComp = props.activeComp;
  const [navTogle, setNavTogle] = useState(null);
  const {signUser, userOut} = useContext(MainContext);

  const logOut = ()=>{
    signOut(auth)
      .then(()=>{
        userOut();
        console.log(auth.currentUser);
      })
      .catch((error)=>{
        console.log(error.message)
      })
  }



  return(
    <>
      <section id="header">
        <Link to="/"><img src="img/logo.png" className="logo" alt="" /></Link>
        <div>
          <ul className={`navbar ${navTogle =="active"? "active": ""}`}>
            <li><Link to="/" className={`links ${activeComp == "home"?"active": ""}`}>Home</Link></li>
            <li><Link to="/shop" className={`links ${activeComp == "shop"?"active": ""}`}>Shop</Link></li>
            <li><Link to="/about" className={`links ${activeComp == "about"?"active": ""}`}>About</Link></li>
            <li><Link to="/contact" className={`links ${activeComp == "contact"?"active": ""}`}>Contact</Link></li>
            { signUser ? <li onClick={logOut}><i className="fa-solid fa-sign-out"></i></li> :
              <li className={`user-link links ${activeComp == "user"? "active": ""}`}>
                <i class="fa-solid fa-user"></i>
                <div>
                  <Link to="/signup"><p className="log-info sign-up">Sign up</p></Link>
                  <Link to="/signin"><p className="log-info log-in">Sign in</p></Link>
                </div> 
              </li>
            }
            <li id="lg-shopping"><Link to={signUser? "/cart" : "/signin"} className={`links ${activeComp == "cart"?"active": ""}`}><i class="fa-solid fa-shopping-bag"></i></Link></li>
            <a  onClick={()=>setNavTogle(null)} href="#" id="close"><i class="fa-solid fa-times"></i></a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/user"><a><i class="fa-solid fa-shopping-bag"></i></a></Link>
          <i onClick={()=>setNavTogle("active")} id="bar" class="fas fa-outdent hamburger"></i>
        </div>
    </section>
  </>
  )
}

export default Navtops;