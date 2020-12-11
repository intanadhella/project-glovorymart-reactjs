import React, { Component } from 'react'
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import glovoryLogo from "../assets/images/icons/glovory.svg"

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar
                    bg="white"
                    variant="light"
                    className="shadow"
                    fixed="top"
                >
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
                            <i className="fas fa-search"></i>
                        </Button>
                    </Form>
                    <Nav>
                        <Button
                            variant="light"
                            className="nav-link mr-3 px-3"
                            onClick={this.props.handleShow}
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </Button>
                        <Nav.Link
                            variant="light"
                            href="#account"
                            className="px-3"
                        >
                            <i className="fas fa-user-circle"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
