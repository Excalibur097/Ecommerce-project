import { useContext, useEffect, useState } from "react";
import Navtops from "../Components/Navtop";
import { MainContext } from "../Contexts/MainContext";
import {auth, db} from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const Cart = ()=>{
  const [cart, setCart] = useState([]);
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartUpdate, setCartUpdate] = useState(0)

  const {signUser} =useContext(MainContext);

  useEffect(()=>{
    const user = auth.currentUser;
    if (user){
      const docRef = collection(db, `Cart ${user.uid}`)
      const cartArray = []
      getDocs(docRef)
        .then(data=>{
          data.docs.map((doc)=>{
            cartArray.push(doc.data());
          })
          setCart(cartArray);
          let total = 0
          cart.forEach((product)=>{
            total = total + product.productPrice;
            console.log(total)
          })
          console.log(total);
          setTotalPrice(total)
        })
    }
  },[cartUpdate])

  useEffect(()=>{
    const user = auth.currentUser;
    if(!user){
      history.push('/')
    }
  }, [signUser])

  const deleteCartItem = (id)=>{
    const user = auth.currentUser;
    const cartDoc = doc(db, `Cart ${user.uid}`, id.toString())
    deleteDoc(cartDoc)
      .then(()=>{
        setCartUpdate(cartUpdate + 1)
      })
    console.log(cartDoc);
  }

  return(
    <div>
      <Navtops activeComps = "cart"/>
      <section id="cart" class="section-p1">
        <table width = "100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {
              cart.slice(1,).map((product)=>{
                return(
                  <tr>
                    <td onClick={()=>deleteCartItem(product.productId)}><i class="far fa-times-circle"></i></td>
                    <td><img src={product.productPic} alt=""/></td>
                    <td style={{textWrap:"wrap"}}>{product.productName}</td>
                    <td>{product.productPrice}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>

      <section id="cart-add" class="section-p1">
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>{`$${totalPrice}`}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{`$${totalPrice}`}</strong></td>
            </tr>
          </table>
          <button class="normal">Proceed to checkout</button>
        </div>
      </section>
    </div>
  )
}

export default Cart;