import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import ShopPage from "./Shop/ShopPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Bottom from "./Components/Bottom";
import ProductDetail from "./Shop/ProductPage";
import SignUp from "./User/SignUp";
import SignIn from "./User/SignIn";
import Cart from "./Cart/Cart";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";





export default function App(){
 
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path = '/shop'>
            <ShopPage/>
          </Route>
          <Route path = '/products/:id'>
            <ProductDetail/>
          </Route>
          <Route path = '/signup/'>
            <SignUp/>
          </Route>
          <Route path = '/signin/'>
            <SignIn/>
          </Route>
          <Route path = '/cart'>
            <Cart/>
          </Route>
          <Route path = '/about'>
            <About/>
          </Route>
          <Route path = '/contact'>
            <Contacts/>
          </Route>
        </Switch>
        <Bottom/>
      </BrowserRouter>
    </div>
  
  ) 
}


