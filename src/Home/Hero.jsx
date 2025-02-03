import { useContext, useEffect } from "react";
import { MainContext } from "../Contexts/MainContext";
import {auth, db} from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Hero = ()=>{

  const {signUser, userSigned} = useContext(MainContext);

  useEffect(()=>{
    const user = auth.currentUser;
    if(user){
      const docRef = doc(db, 'Users', user.uid);
      getDoc(docRef)
        .then(docSnap=>{
          userSigned(docSnap.data().firstName)
          console.log(docSnap.data());
        })
      console.log(user);
      
    }
  },[])

  return(
    <>
      <section id="hero">
        {signUser && <h3>Welcome {signUser}</h3>}
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </section>
    </>
     
  )
}

export default Hero;