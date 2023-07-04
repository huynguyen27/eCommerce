import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 10px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 10px;
    flex: 0 0 12%;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/brand">Brand</Link>
          </li>
          <li>
            <Link to="/loginregister">LoginRegister</Link>
          </li>
          <li>
            <Link to="/shoppingcart">ShoppingCart</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
