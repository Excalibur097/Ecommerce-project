import { useContext, useState } from "react";
import {  signInWithEmailAndPassword  } from "firebase/auth";
import Navtops from "../Components/Navtop";
import {auth, db} from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MainContext } from "../Contexts/MainContext";
import { getDoc, doc } from "firebase/firestore";


const SignIn = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const {signedIn} = useContext(MainContext);

 const handleSubmit =async (e)=>{
  e.preventDefault();
  try{
    await signInWithEmailAndPassword(auth, email, password);
    signedIn();
    history.push('/');
  }catch(error){
    console.log(error);
  }
  setEmail('');
  setPassword('');
 }

  return(
    <div>
       <Navtops activeComp = "user"/>
       <h2>Sign in to your account now!</h2>
      <form className="form-reg" onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} 
          onChange={(e)=> setEmail(e.target.value)} required />

        <input type="text" placeholder="Password"  value={password}
          onChange={(e)=> setPassword(e.target.value)} required/>
        
        <button type="submit">Submit</button>
      </form>
      <div>
        <div>Dont have an account?</div>
      </div>
    </div>
  )
}

export default SignIn;