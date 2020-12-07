import React, { Component } from 'react'
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import glovoryLogo from "../assets/images/icons/glovory.svg"

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" variant="light" className="shadow">
                    <Navbar.Brand className="mx-5" href="#home">
                        <img
                            src={glovoryLogo}
                            width="87"
                            height="40"
                            className="d-inline-block align-top"
                            alt="glovoryLogo"
                        />
                    </Navbar.Brand>
                    <Form inline className="mr-auto">
                        <FormControl
                            type="text"
                            placeholder="Search products"
                            className="mr-sm-2 bg-light"
                        />
                        <Button variant="outline-secondary">
                            <i class="fas fa-search"></i>
                        </Button>
                    </Form>
                    <Nav>
                        <Nav.Link
                            href="#keranjang"
                            className="btn btn-light mr-3 px-3"
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </Nav.Link>
                        <Nav.Link
                            href="#account"
                            className="btn btn-light px-3"
                        >
                            <i class="fas fa-user-circle"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
