import './components/styles/App.css';
import "@material-tailwind/react/tailwind.css";
import NavBar from './components/Nav';
import HomeCarousel from './components/HomeCarousel';
import Products from './components/Products';
import { useState, useEffect } from 'react'
// import { db } from './firebase'
import { useStateValue } from './StateProviser'
import Login_SignUp from './components/Login_SignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Admin from './components/Admin';
import Cart from './components/Cart';
import axios from "axios";

function App() {

  const [{user}, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  const fetchProducts = async() => {
      const res = await axios.get('http://localhost:5000/getProductData').then((response) => {
          setProducts(response.data);
      }).catch((e) => console.log(e));
  }
  useEffect(() => {
      fetchProducts();
      console.log('products : ',products);
  }, [])
  return (
    <>
        <div className="App">
          {
            !user ? (
              <Login_SignUp/>
            ) : (
              <div>
                <Router>
                  <Switch>
                    <Route exact path='/'>
                      <NavBar />
                      <HomeCarousel />
                      <div className="products">
                        {
                          products.map((item) => (
                            <Products 
                              name = {item.name}
                              description = {item.description}
                              imgSrc = {item.imgSrc}
                              price = {item.price}
                            />
                          ))
                        }
                      
                      </div>
                    </Route>
                    <Route exact path='/admin'>
                        <NavBar />
                      <Admin />
                    </Route>
                    <Route exact path='/cart'>
                      <NavBar />
                      <Cart />
                    </Route>
                  </Switch>
                </Router>
              </div>
            )
          }
        </div>
  </>
  );
}

export default App;
