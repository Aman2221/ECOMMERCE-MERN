import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import "material-icons/css/material-icons.min.css";
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsIcon from '@material-ui/icons/Settings';
import './styles/App.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProviser'
import {  Link } from "react-router-dom";

export default function NavBar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [{basket}] = useStateValue();
  return (
    <Navbar className='nav' color="red" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand className='logo'>
            <i className="fas fa-bolt"></i>E L E C T R O
          </NavbarBrand>
          <NavbarToggler onClick={() => setOpenNavbar(!openNavbar)} />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
          <Link to='/'>
            <NavItem ripple="light">
              <LanguageIcon />
              Home
            </NavItem>
          </Link>
          <Link to='/cart'>
            <NavItem  ripple="light">
              <ShoppingCartIcon />
              CART
              <p className='cart_count'>{basket.length}</p>  
            </NavItem>
          </Link>
          <Link to='/admin'>
              <NavItem ripple="light">
                  <SettingsIcon />
                  Admin
                </NavItem>
          </Link>
          <a href="https://linktr.ee/_Aman_">
            <NavItem ripple="light">
              <PhoneIcon />
              Contact
            </NavItem>
          </a>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}