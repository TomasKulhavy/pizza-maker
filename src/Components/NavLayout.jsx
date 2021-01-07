import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

const NavLayout = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Pizza maker</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/order/pizza">Pizza</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/order/calzone">Calzone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/ingredients">Ingredients</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavLayout;