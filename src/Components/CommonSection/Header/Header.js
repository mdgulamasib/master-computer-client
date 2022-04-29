import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/mc_header-img.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='custom-navbar'>
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} className='me-md-5 ' height={80} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto custom-text">
                            <Nav.Link className='me-md-3' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/blog">Blog</Nav.Link>

                            <Nav.Link className='me-md-3' as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut} >
                                        Sign-out
                                    </Nav.Link>
                                    :

                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;