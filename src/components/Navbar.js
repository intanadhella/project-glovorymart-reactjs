import React, { Component } from 'react'
import {Navbar, Nav, InputGroup, FormControl, Button, Badge} from "react-bootstrap";
import glovoryLogo from "../assets/images/icons/glovory.svg"

class Navigation extends Component {
    render() {
        return (
            <Navbar
                bg="white"
                variant="light"
                className="shadow px-0"
                fixed="top"
            >
                <Nav className="px-xl-5 px-lg-4 px-3 full-width mx-auto w-100 justify-content-between">
                    <Navbar.Brand href="#home">
                        <img
                            src={glovoryLogo}
                            width="87"
                            height="40"
                            className="d-inline-block align-top"
                            alt="glovoryLogo"
                        />
                    </Navbar.Brand>
                    <InputGroup className="mx-5 d-none d-md-flex w-50">
                        <InputGroup.Prepend>
                            <InputGroup.Text
                                id="basic-addon1"
                                className="bg-light border-0 pl-4"
                            >
                                <i className="fas fa-search"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search products"
                            aria-label="Search products"
                            aria-describedby="search-products"
                            className="h-auto bg-light border-0"
                        />
                    </InputGroup>

                    <div className="d-inline-flex">
                        <Button
                            variant="light"
                            className="d-block d-md-none nav-link px-3 mr-3"
                        >
                            <i className="fas fa-search"></i>
                        </Button>
                        <Button
                            variant="light"
                            className="nav-link mr-3 px-3"
                            onClick={this.props.handleShow}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <Badge variant="danger">
                                {this.props.countKeranjang()}
                            </Badge>
                        </Button>
                        <Button variant="light" className="nav-link px-3">
                            <i className="fas fa-user-circle"></i>
                        </Button>
                    </div>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;
