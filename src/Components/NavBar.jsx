import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './compStyle.css';
import logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary rounded">
      <Container fluid>
        {/* Left side: Toasted Minds */}
        <Navbar.Brand href="#home" className='d-flex align-items-center'> 
            <img src={logo} alt="Toasted Minds" width="50" height="50" />
            Toasted Minds
        </Navbar.Brand>
        {/* Right side: Nav items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Apply ms-auto to the Nav */}
            <Nav.Link href="#home">Home</Nav.Link>
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
            </NavDropdown>
            <Nav.Link href="#link">Competitions</Nav.Link>
            <Nav.Link href="#link">Sponsors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
