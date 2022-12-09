import React from "react";
import {  Button, Nav, Navbar, Container } from 'react-bootstrap'
//import './header.css'

const Index = (props) => {
    const { children } = props
    return(
        <Navbar 
            bg="dark" 
            variant="dark"
            expand="lg">
        <Container>
            <Navbar.Brand className="navbar-font" href="/">
                <img
                    src="/img/logo.png"
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Nilsat Tools
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/upload">Subir programa</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>   
    )
}

export default Index;
