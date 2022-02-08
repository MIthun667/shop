import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'



const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
    <div className="container">
      <NavLink to="/" className="navbar-brand">Shop</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 py-2">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link active" aria-current="page">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link active" aria-current="page">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link active" aria-current="page">Contact Us</NavLink>
          </li>
        </ul>
       <div className="buttons">
           <NavLink to="/login"className='btn btn-outline-dark mr-2'>
           <i className="fas fa-sgin-in" ></i>Login</NavLink>
            <NavLink to="/register"className='btn btn-outline-dark mr-2'>
            Register</NavLink>
            <NavLink to="/cart"className='btn btn-outline-dark mr-2'>
            Cart ({state.length})</NavLink>
       </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
