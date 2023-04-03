import React from 'react'
import { Link } from 'react-router-dom';

import '../Layout/Layout.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from '../Layout/logo.png'





const Header = () => {
  return (
    <div className='Header'>
        <Navbar expand="lg" bg="light">
            <Container id='nav'>
                <img className="logo" src={Logo} alt="logo"></img>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link className="nav-item" to="/">Home</Link>
                  <Link className="nav-item" to="Gallerie">Gallerie</Link>
                  <Link className="nav-item" to="Tarif">Tarif</Link>
                  <Link className="nav-item" to="Contact">Contact</Link>
                  <Link className="nav-item facebook social" to="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></Link>
                  <Link className="nav-item instagram social" to="http://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header