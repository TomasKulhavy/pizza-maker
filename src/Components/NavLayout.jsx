import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

const NavLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand to="/" tag={Link}>Pizza maker</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav>
                    <NavItem><NavLink to="/order/pizza" tag={Link}>Objednat Pizzu</NavLink></NavItem>
                    <NavItem><NavLink to="/order/calzone" tag={Link}>Objednat Calzone</NavLink></NavItem>
                    <NavItem><NavLink to="/ingredients" tag={Link}>Ingredience</NavLink></NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavLayout;