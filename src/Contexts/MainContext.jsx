import { createContext, useEffect, useState } from "react";
import {auth, db} from "../firebase";
import { setDoc, doc, addDoc, collection} from "firebase/firestore";


export const MainContext = createContext();


const MainContextProvider = (props)=>{
 
  const [sign, setSign] = useState(false);
  const [signUser, setSignUser] = useState(null);

  const userSigned = (signUserName)=>{
    setSign(true);
    setSignUser(signUserName);
  }

  const signedIn = ()=>{
    setSign(true)
  }

  const userOut = ()=>{
    setSign(false);
    setSignUser(null);
  }

  const addToCart = (productId,products)=>{
    const user = auth.currentUser;

    products.forEach(product => {
     if (product.id === productId){
      setDoc(doc(db, `Cart ${user.uid}`, productId.toString()), {
        productName: product.title,
        productPrice: product.price,
        productPic: product.image,
        productId : productId
      })
     }
    });
  }

  return(
    <MainContext.Provider value={{signedIn, sign, signUser, userSigned, userOut, addToCart}}>
      {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider;