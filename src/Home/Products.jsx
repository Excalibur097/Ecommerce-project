import { Link } from "react-router-dom";
import {auth, db} from "../firebase";
import { setDoc, doc, addDoc} from "firebase/firestore";
import { useContext } from "react";
import { MainContext } from "../Contexts/MainContext";


const Products = (props)=>{
  const products = props.products
  console.log(products);
  

  const {addToCart} = useContext(MainContext);

  
  
  return(
    <>
      <section id="product1" className="section-p1">
        <h2>Shop Now</h2>
        <p>Explore our products</p>
        <div className="pro-container">
          {
            products &&
            products.map((product, id)=>{
              return(
                <div class="pro">
                  <Link to = {`/products/${product.id}`}><img src={product.image} alt=""/></Link>
                  <div class="des">
                    <span>{product.category}</span>
                    <h5>{product.title}</h5>
                    <div class="star">
                     {product.rating.rate}
                     <i class="fa-solid fa-star"></i>
                    </div>
                    <h4>${product.price}</h4>
                  </div>
                  <div>
                    <a onClick={()=> addToCart(product.id, products)}>
                      <i class="fa-solid fa-shopping-cart cart"></i>
                    </a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>    
  )
}

export default Products;

