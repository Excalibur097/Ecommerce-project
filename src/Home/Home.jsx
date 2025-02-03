import Navtops from "../Components/Navtop";
import Features from "./Features";
import Hero from "./Hero";
import Search from "./Search";


const Home = ()=>{
 
  
  return(
    <div>
      <Navtops activeComp = 'home'/>
      <Hero/>
      <Features/>
      <Search/>
    </div>
    
  )
}

export default Home;