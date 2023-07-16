import React, { useState } from 'react';
import '../style/Footer.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.2);
`;

const ModalBody = styled.div`
	background-color: white;
	margin: 10% 30%;
	padding: 24px;
  text-align: center;
`;

const ModalText = styled.div`
    font-size: 32px;
    line-height: 68px;
`;


const Footer = () => {
  const [email, setEmail] = useState("");
  const [submission, setSubmission] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);


  const handleEmailInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
    setSubmission(false);
  };

  const validateEmail = (value) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const NewsletterSubmission = ({ submission, isValidEmail, onRequestClose }) => {
    return (
      submission && isValidEmail ? (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={e => e.stopPropagation()}>
            <ModalText>Thank you very much</ModalText>
            <ModalText>Submission Succesful</ModalText>
          </ModalBody>
        </ModalBackground>
      ) : null
    );
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setSubmission(true);
    if (isValidEmail) {
      console.log('Submitted email:', email);
      setEmail('');
      setIsValidEmail(true);
    }
    
  };

  return (
    <>
      <NewsletterSubmission
        submission={submission}
        isValidEmail={isValidEmail}
        onRequestClose={() => { setSubmission(false); setIsValidEmail(false); }} >
      </NewsletterSubmission>


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
                  <Link id="quickLinks" to="/about">ABOUT US</Link>
                </li>
                <li className="py-2">
                  <Link id="quickLinks" to="/contact">CONTACT US</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 text-white">
              <ul className="list-unstyled">
                <li id="label" className="py-1">
                  PAYMENT METHODS
                </li>
                <li className="py-2">
                  <img style={{ marginRight: "15px" }} src={require('../assets/cc-visa.png')} width="75" height="48" alt="" />
                  <img src={require('../assets/cc-mastercard.jpg')} width="75" height="48" alt="" />
                </li>
              </ul>
            </div>
            <div className='col-sm-4 text-white'>
              <ul className="list-unstyled">
                <li id="label" className="py-1">
                  NEWSLETTER SIGNUP
                </li>
                <li className="py-3 text-center">
                  <form onSubmit={handleEmailSubmit} >
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="formWhite"
                        className="rounded-0 form-control form-outline text-white bg-dark"
                        placeholder="SIGN UP FOR EMAILS"
                        aria-label="Your Email Address"
                        aria-describedby="basic-addon2"
                        value={email}
                        onChange={handleEmailInputChange}
                      />
                    </div>
                    {submission && !isValidEmail && <p className="error-message pt-3">INVALID EMAIL ADDRESS</p>}

                  </form>


                </li>
              </ul>
            </div>
          </div>

        </div>

      </footer >
      <div className="bg-dark py-4 border-top border-secondary text-white text-center"> Copyright © 2023 THTrue Milk. All Rights Reserved </div>
    </>


  )
};



export default Footer;
