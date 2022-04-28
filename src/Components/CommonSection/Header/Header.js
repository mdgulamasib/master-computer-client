import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/mc_header-img.png'
import './Header.css'

const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='custom-navbar'>
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} className='me-md-5 ' height={90} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-text">
                            <Nav.Link className='me-md-3' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;