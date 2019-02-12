import React from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import Logo from '../assets/greensx_logo_250px.gif';
import {Link} from "@reach/router";

function Header() {
    return (
        <Navbar collapseOnSelect style={{marginBottom:'0px'}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/"><img src={Logo} width={60} height={30}/> </a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/">
                        Home Page
                    </NavItem>
                    <NavItem eventKey={2}>
                        AboutUs
                    </NavItem>
                    <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} componentClass={Link} to="create/product" href="/create/product" >Create Product</MenuItem>
                        <MenuItem eventKey={3.1} componentClass={Link} to="create/product" href="/create/product" >Products</MenuItem>
                        <MenuItem eventKey={3.2}>Members</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} to="register" href="/register">
                        Register
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="login" href="/login">Login</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header