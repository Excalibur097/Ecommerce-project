import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import Navtops from "../Components/Navtop";


const ProductDetail = ()=>{
  const {id} = useParams();
  const [productData, setProductData] = useState(null)

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setProductData(data)
      console.log(productData)
    })
  }, [])
  


  return(
    <div>
      <Navtops activeComp = 'shop'/>
      {
        productData &&
        <section id="prodetails" class="section-p1">
          <div class="single-pro-image">
            <img src={productData.image} width="100%" id="main-img" alt=""/>
          </div>
          <div class="single-pro-details">
            <h6>{productData.category}</h6>
            <h4>{productData.title}</h4>
            <h2>${productData.price}</h2>
            <button class="normal">Add to Cart</button>
            <h4>Product Details</h4>
            <span>
              {productData.description}
            </span>
          </div>
      </section>
    
      }
    </div>
  )
}

export default ProductDetail;