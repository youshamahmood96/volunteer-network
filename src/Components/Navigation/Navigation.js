import React, { useContext} from 'react';
import { Button, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import vnLogo from '../../logos/vnLogo.png';
import './Navigation.css';
const Navigation = () => {
    const [user, setLoggedInUser] = useContext(UserContext)
    
    return (
        <div className="navigation" >
        <Navbar style={{marginBottom:'40px'}} collapseOnSelect expand="lg" bg="transparent">
            <Navbar.Brand href="/home"> <img className="img-fluid logo" src={vnLogo} alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link style={{marginRight:'30px'}}>Home</Nav.Link>
                <Nav.Link style={{marginRight:'30px'}}>Donation</Nav.Link>
                <Nav.Link style={{marginRight:'30px'}}>Events</Nav.Link>
                <Nav.Link style={{marginRight:'30px'}}>Blog</Nav.Link>
                {
                    user?.name?
                    (
                        <Nav.Link style={{marginRight:'30px'}}>{user.name}</Nav.Link>
                    ):
                    (<Link to='/login'>
                        <Button style={{marginRight:'30px'}}>Register</Button>
                    </Link>
                    )
                }
                <Link to ='/adminPanel'><Button style={{marginRight:'30px'}}>Admin</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Navigation;