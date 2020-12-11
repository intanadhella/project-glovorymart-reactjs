import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

class Body extends Component {
    render() {
        const daftarBarang = this.props.daftarBarang.map((barang) => (
            <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                <Card className="mb-4 zoom border-0">
                    <Card.Body>
                        <div className="display-foto">
                            <img
                                src={barang.gambar}
                                alt={barang.namaBarang}
                                className="foto-makanan"
                            />
                        </div>
                        <Card.Title className="mt-4 two-lines">
                            {barang.namaBarang}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-danger one-line text-right">
                            {barang.harga}
                        </Card.Subtitle>
                        <Button variant="danger" block>
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
        return (
            <div className="px-5 bg-light full-height">
                <Row>
                    {daftarBarang}
                </Row>
            </div>
        );
    }
}

export default Body;
