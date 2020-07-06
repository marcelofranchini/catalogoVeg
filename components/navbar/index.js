import React, { useState } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


export default function NavbarPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (

        <div>


            <Navbar color="dark" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">Veg  </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink href="/">Início</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Teste</NavLink>
                            </NavItem>
                            <NavItem className="form-inline mt-2 mt-md-0">
                                <form className="form-inline mt-2 mt-md-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </NavItem>
                            <NavItem>
                                <button className="btn btn-outline-success ml-4">
                                    Entre
                                </button>
                            </NavItem>
                            <NavItem>
                                <button className="btn btn-outline-success ml-4 ">
                                    Cadastre-se
                                </button>
                            </NavItem>
                        </Nav>

                    </Collapse>

                </Container>
            </Navbar>


        </div>
    );
}
