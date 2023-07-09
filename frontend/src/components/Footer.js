import React from 'react';
import '../style/Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return(
    <>
    <footer id="general_footer" className="pt-4 pb-2 bg-dark">
      <div className="container-xxl">
        <div className="row">
          <div className="col-sm-4 text-white">
            <ul className="list-unstyled">
              <li className="py-2">
                <Link id="quickLinks" to="/">HOME</Link>             
              </li>
              <li className="py-2">
                <Link id="quickLinks" to="/product">PRODUCT</Link>             
              </li>
              <li className="py-2">
                <Link id="quickLinks"  to="/about">ABOUT US</Link>             
              </li>
              <li className="py-2">
                <Link id="quickLinks"  to="/contact">CONTACT US</Link>             
              </li>
            </ul>
          </div>
          <div className = "col-sm-4 text-white">
            <ul className="list-unstyled">
            <li id="label" className="py-1">
              PAYMENT METHODS              
              </li>
              <li className="py-2">
                <img style={{marginRight: "15px"}} src={require('../assets/cc-visa.png')} width="75" height="48" />
                <img src={require('../assets/cc-mastercard.jpg')} width="75" height="48"/>
                </li>       
            </ul>    
          </div>
          <div className = 'col-sm-4 text-white'>
            <ul className="list-unstyled">
              <li id="label" className="py-1">
                NEWSLETTER SIGNUP
              </li>
              <li className="py-3 text-center">
              <div className="form-outline form-white">
                  <input type="text" id="formWhite" className="rounded-0 form-control form-outline text-white bg-dark" placeholder="SIGN UP FOR EMAILS" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                </div>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
     
    </footer >
     <div className= "bg-dark py-4 border-top border-secondary text-white text-center"> Copyright © 2023 THTrue Milk. All Rights Reserved </div>
 </>
    
    
  )
};

export default Footer;
