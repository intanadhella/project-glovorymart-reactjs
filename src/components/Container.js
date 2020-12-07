import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import ketela from "../assets/images/ketela.png";
import susu from "../assets/images/susu.png";

class Body extends Component {
    render() {
        return (
            <div bg="light" className="p-5 ">
                <Row>
                    <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                        <Card className="mb-4">
                            <Card.Body>
                                <div className="display-foto">
                                    <img
                                        src={ketela}
                                        alt="ketela"
                                        className="foto-makanan"
                                    />
                                </div>
                                <Card.Title className="mt-4 two-lines">
                                    Card Title
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-danger one-line">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Button variant="danger" block>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                        <Card className="mb-4">
                            <Card.Body>
                                <div className="display-foto">
                                    <img
                                        src={susu}
                                        alt="susu"
                                        className="foto-makanan"
                                    />
                                </div>

                                <Card.Title className="mt-4 two-lines">
                                    Card Title Lorem Ipsum Dolor Sit Amet
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-danger one-line">
                                    Card Subtitle Lorem Ipsum Dolor
                                </Card.Subtitle>
                                <Button variant="danger" block>
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Body;
