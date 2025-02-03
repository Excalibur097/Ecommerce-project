import { useState, useEffect } from "react";
import Products from "./Products";

let myHeaders = new Headers();
myHeaders.set('Content-Type', 'application/json');


const Search = ()=>{
  const [categories, setcategories] = useState(null);
  const [activeCate, setActiveCate] = useState('all');
  const [products, setProducts] = useState(null);
  const [refresher, setRefresher] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchArray, setSearchArray] = useState(null);
  const [users, setUsers] = useState(null);
  const [logedUser, setLogedUser] = useState(null)

  useEffect(()=>{
    getCategories();
    getProducts();
  }, [refresher])


  const getCategories = ()=>{
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>{
        return res.json();
        console.log(res)
      })
      .then(data=>{
        setcategories(data);
      })
      .catch(error=>{
        console.log(error.messoage);
      })
    
  }

  const getProducts = ()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setProducts(data);
        setSearchArray(data);
      })
      .catch(error=>{
        console.log(error.message);
      })
  }
 

  const chooseCategory = (category)=>{
    setActiveCate(category);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setProducts(data);
      })
      .catch(error=>{
        console.log(error.message);
      })
  }




  const chooseAllCategory = ()=>{
    setActiveCate('all');
    getProducts();
  }

  const handleSearch = (e)=>{
    e.preventDefault();
    const filtered = searchArray.filter((product)=>product.title.toLowerCase().includes((searchTerm).toLowerCase()));
    setProducts(filtered);
  }

  return(
    <>
      <div className="search-section">
        <form id="search" action="" onSubmit={handleSearch}>
          <input type="text" placeholder="Search product" value={searchTerm}
           onChange={(e)=> setSearchTerm(e.target.value)} />
          <button className="normal" type="submit">Search</button>
        </form>
        <div className="categories">
          <p onClick={chooseAllCategory} className={`${activeCate =="all"? "active": ""}`}>all</p>
          {categories &&
            categories.map((category, id)=>{
              return(
                <div>
                  <p onClick={()=>chooseCategory(category)} className={`${activeCate ==category? "active": ""}`}>{category}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <Products products = {products && products}/>
    </>
  )
}

export default Search;