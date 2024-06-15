import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import { ShopCategory } from './Pages/ShopCategory';
import  Cart  from './Pages/Cart';
import  Home  from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Electronicsban from './Components/Assets/eleban.png'
import fassban from './Components/Assets/fassban.jpg'
import grocban from './Components/Assets/grocban1.png'
import LoginSignup  from './Pages/LoginSignup';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />}/>

        <Route path='/Electronics' element={<ShopCategory banner={Electronicsban} category="Electronics"/>}/>
        <Route path='/Fashion' element={<ShopCategory banner={fassban} category="Fashion"/>}/>
        <Route path='/Grocery' element={<ShopCategory banner={grocban} category="Grocery"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Sign in' element={<LoginSignup/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
