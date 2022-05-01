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

    //signout control function is here
    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        < div>
            <Navbar collapseOnSelect expand="lg" className='custom-navbar'>
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} className='me-md-5 ' height={80} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-md-3 text-color' as={Link} to="/"><span className='custom-text'>HOME</span></Nav.Link>
                            <Nav.Link className='me-md-3' as={Link} to="/blog"><span className='custom-text'>BLOG</span></Nav.Link>

                            {
                                user ?
                                    <Nav>
                                        <Nav.Link className='me-md-3' as={Link} to="/manageinventory"><span className='custom-text'>MANAGE ITEMS</span></Nav.Link>
                                        <Nav.Link className='me-md-3' as={Link} to="/addnewitem"><span className='custom-text'>ADD ITEMS</span></Nav.Link>
                                        <Nav.Link className='me-md-3' as={Link} to="/myitems"><span className='custom-text'>MY ITEMS</span></Nav.Link>
                                        <Nav.Link onClick={handleSignOut} >
                                            <span className='custom-text'>LOGOUT</span>
                                        </Nav.Link>
                                    </Nav>
                                    :

                                    <Nav.Link as={Link} to="login">
                                        <span className='custom-text'>LOGIN</span>
                                    </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;