import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../logo.svg";
import {Image, Navbar, Nav} from "react-bootstrap";
import './AppHeader.css'

const AppHeader = () => {
    return (
        <div >
            <Navbar bg="white">
                <Navbar.Brand href="/home">

                    <Image src={logo} width="50px" height="50px"/>
                    H2S
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="right-aligned">
                    <Nav>
                        <Nav.Link href="/about">About us</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default AppHeader;