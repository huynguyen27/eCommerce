import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import "../styles/Header.css"

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import htmlForm from 'react-bootstrap/htmlForm';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const StyledNavbar = styled(Navbar)`
//     ${'' /* background-color: /080705; */}
//     background-color: /F5EFED;
// `;

// const StyledNavbarBrand = styled(Navbar.Brand)`

// `;

const Header = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo"><NavLink to="/" className="custom-nav-link">Online Store</NavLink></div>
          
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><NavLink to="/about" className="custom-nav-link">About Us</NavLink></li>
            <li>
              <NavLink to="/product" className="custom-nav-link desktop-item">Product</NavLink>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">Product</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row first-row">
                  <h6><NavLink to="/" className="custom-nav-link">Design Services</NavLink></h6>
                    <ul className="mega-links">
                      <li><NavLink to="/" className="custom-nav-link">Graphics</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Vectors</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Business cards</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Custom logo</NavLink></li>
                    </ul>
                  </div>

                  <div className="row">
                  <h6><NavLink to="/" className="custom-nav-link">Design Services</NavLink></h6>
                    <ul className="mega-links">
                      <li><NavLink to="/" className="custom-nav-link">Graphics</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Vectors</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Business cards</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Custom logo</NavLink></li>
                    </ul>

                  </div>

                  <div className="row">
                  <h6><NavLink to="/" className="custom-nav-link">Design Services</NavLink></h6>
                    <ul className="mega-links">
                      <li><NavLink to="/" className="custom-nav-link">Graphics</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Vectors</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Business cards</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Custom logo</NavLink></li>
                    </ul>

                  </div>
                  <div className="row">
                  <h6><NavLink to="/" className="custom-nav-link">Design Services</NavLink></h6>
                    <ul className="mega-links">
                      <li><NavLink to="/" className="custom-nav-link">Graphics</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Vectors</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Business cards</NavLink></li>
                      <li><NavLink to="/" className="custom-nav-link">Custom logo</NavLink></li>
                    </ul>
                  </div>
                  
                </div>
                
              </div>
            </li>
            <li>
              <NavLink to="/brand" className="custom-nav-link desktop-item">Brand</NavLink>
              
            </li>
            <li><NavLink to="/contact" className="custom-nav-link">Contact</NavLink></li>
            <li><NavLink to="/loginregister" className="custom-nav-link">Account</NavLink></li>
            <li><NavLink to="/shoppingcart" className="custom-nav-link">Cart</NavLink></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>


      {/* <header classNameName=""> 

      </header> */}
    </>
  );
};

export default Header;
