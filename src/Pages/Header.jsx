import React from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.jpg';
import '../../src/App.css';

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark">
                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            alt='Logo'
                            style={{ borderRadius: '30%' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/about" className="text-white">About as</Nav.Link>
                            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
                            <Nav.Link href="/blog" className="text-white">Blog</Nav.Link>
                            <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                            <NavDropdown title={<span className="text-white">Dropdown</span>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header