import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Nav.Link as={NavLink} to="/">React-Exam</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/reviews">Features</Nav.Link>
                        <Nav.Link as={NavLink} to="/moderation">Features</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/login">Features</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Features</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header