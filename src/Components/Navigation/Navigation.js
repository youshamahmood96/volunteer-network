import React, { useContext} from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import vnLogo from '../../logos/vnLogo.png';
import './Navigation.css';
const Navigation = () => {
    const [user, setLoggedInUser] = useContext(UserContext)
    const location = useLocation()
    return (
        <div className="navigation" >
        <Navbar style={{marginBottom:'40px'}} collapseOnSelect expand="lg" bg="transparent">
            <Link to='/'><Navbar.Brand> <img className="img-fluid logo" src={vnLogo} alt="logo"></img></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href='/' className="navigation-links">Home</Nav.Link>
                <Nav.Link className="navigation-links">Donation</Nav.Link>
                <Nav.Link className="navigation-links">Events</Nav.Link>
                <Nav.Link className="navigation-links">Blog</Nav.Link>
                {
                    user?.name?
                    (
                        <Nav.Link className="navigation-links">{user.name}</Nav.Link>
                    ):
                    (<Link to='/login'>
                        <button className="navigation-links register-btn">Register</button>
                    </Link>
                    )
                }
                {
                    location.pathname ==="/eventTasks"? ''
                    :(
                        <Link to ='/adminPanel'><button className="navigation-links admin-btn">Admin</button></Link>
                    )
                }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Navigation;