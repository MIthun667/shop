
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes } from "react-router-dom";
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import Login from './Shared/Login/Login';
import Register from './Shared/Register/Register';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='' element={<About />} />
        </Routes>
        <About />
        <Contact></Contact>
        <Footer></Footer>
    </>
  );
}

export default App;
