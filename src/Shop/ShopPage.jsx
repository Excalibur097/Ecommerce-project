import Navtops from "../Components/Navtop"
import Features from "../Home/Features"
import Search from "../Home/Search"


const ShopPage = ()=>{
  return(
    <div>
      <Navtops activeComp = "shop"/>
      <Search/>
    </div>
  )
}

export default ShopPage