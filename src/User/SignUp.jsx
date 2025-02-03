import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Navtops from "../Components/Navtop";
import {auth, db} from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setDoc, doc } from "firebase/firestore";

const SignUp = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();


  const createUserCart =async(userId)=>{

  }

 const handleSubmit =async (e)=>{
  e.preventDefault();
  try{
    await createUserWithEmailAndPassword(auth, email, password)
    const user = auth.currentUser;
    setDoc(doc(db, 'Users', user.uid), {
      firstName: firstName,
      lastName : lastName
    })
    setDoc(doc(db, `Cart ${user.uid}`, '0'), {
      productName: 'test',
      productPrice: 0
    })
    console.log('successful');

    history.push('/signin')
  }catch(error){
    console.log(error.message);
  }
  setEmail('');
  setPassword('');
  setFirstName('');
  setLastName('');
 }

  return(
    <div>
       <Navtops activeComp = "user"/>
       <h2>Register now to open an account</h2>
      <form className="form-reg" onSubmit={handleSubmit}>

        <input type="text" placeholder="First name" value={firstName} 
          onChange={(e)=> setFirstName(e.target.value)} required />

       <input type="text" placeholder="Last name" value={lastName} 
          onChange={(e)=> setLastName(e.target.value)} required />

        <input type="text" placeholder="Email" value={email} 
          onChange={(e)=> setEmail(e.target.value)} required />

        <input type="text" placeholder="Password"  value={password}
          onChange={(e)=> setPassword(e.target.value)} required/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp;