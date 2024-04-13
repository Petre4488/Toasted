import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './compStyle.css';
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// We ll use link tag to link to the different pages of the website without sending requests to the server.
// This will make the website faster and more responsive.

export default function NavBar() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Navbar expand="lg" className="bg-body-tertiary rounded fixed-top shadow NavBarComp">
      <Container>
        {/* Left side: Toasted Minds */}
        <Navbar.Brand href="/" className='d-flex align-items-center'> 
            <img src={logo} alt="Toasted Minds" width="50" height="50" />
            Toasted Minds
        </Navbar.Brand>
        {/* Right side: Nav items */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Apply ms-auto to the Nav */}
          <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Toasted" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Technical Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Programming Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PR Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Budget
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/signup">
                SignUp
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/competitions">
                <Nav.Link>Competitions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sponsors">
                <Nav.Link>Sponsors</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
