import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function BasicExample() {
    return (
        <Navbar expand="lg" className="main">
            <Container>
                <Navbar.Brand href="#home">Luumi Media</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/services'>About</Link>
                        <Link className='link' to='/about'>Services</Link>
                        <Link className='link' to='/contact'>Contact</Link>
                        <Link className='link' to='/blogsection'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
