import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { ToastContainer, toast } from "react-toastify";

class Body extends Component {
    addToCart = (id) => {
        this.props.addToCart(id);
        return toast("Added to cart.")
    };
    render() {
        const daftarBarang = this.props.daftarBarang.map((barang) => (
            <Col xl={2} lg={3} md={4} sm={6} xs={6} key={barang.id}>
                <Card className="mb-4 zoom border-0">
                    <Card.Body>
                        <div className="display-foto">
                            <img
                                src={barang.gambar}
                                alt={barang.namaBarang}
                                className="item-foto"
                            />
                        </div>
                        <Card.Title as="h6" className="mt-4 two-lines">
                            {barang.namaBarang}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-danger one-line text-right">
                            <NumberFormat
                                value={barang.harga}
                                displayType={"text"}
                                thousandSeparator={"."}
                                decimalSeparator={","}
                                prefix={"Rp "}
                            />
                        </Card.Subtitle>
                        <Button variant="danger" block onClick={this.addToCart.bind(this, barang.id)}>
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ));
        return (
            <div className="px-xl-5 px-lg-4 px-3 full-height">
                <Row>{daftarBarang}</Row>
                <ToastContainer autoClose={1000} />
            </div>
        );
    }
}

export default Body;
