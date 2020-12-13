import React, { Component } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import NumberFormat from "react-number-format";

class Keranjang extends Component {
    getTotal = () => {
        const total = this.props.daftarBelanja
            .map((belanja) => {
                belanja.harga = this.props.getBarangById(belanja.id).harga;
                belanja.subTotal = belanja.jumlah * belanja.harga;

                return belanja.subTotal;
            })
            .reduce((prev, curr) => prev + curr, 0);

        return total;
    };
    render() {
        const daftarBelanja = this.props.daftarBelanja.map((belanja) => (
            <div
                className="list-keranjang d-flex border-bottom py-3"
                key={belanja.id}
            >
                <div className="display-keranjang">
                    <img
                        src={this.props.getBarangById(belanja.id).gambar}
                        alt="Ketela"
                        className="item-keranjang"
                    />
                </div>
                <div className="desc-keranjang pl-3">
                    <div className="desc-keranjang-1 d-flex justify-content-between mb-2">
                        <div className="title-keranjang my-auto h6">
                            {this.props.getBarangById(belanja.id).namaBarang}
                        </div>
                        <Button
                            variant="light"
                            className="hapus-keranjang ml-3"
                            onClick={this.props.hapusItem.bind(
                                this,
                                belanja.id
                            )}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </Button>
                    </div>
                    <div className="desc-keranjang-2 d-flex justify-content-between">
                        <InputGroup className="control-keranjang w-50">
                            <Button
                                variant="outline-danger btn-text-hitam"
                                onClick={this.props.kurangItem.bind(
                                    this,
                                    belanja.id
                                )}
                            >
                                -
                            </Button>
                            <FormControl
                                readOnly
                                aria-describedby="basic-addon1"
                                className="border-0 text-center font-weight-bold bg-white"
                                value={belanja.jumlah}
                            />
                            <Button
                                variant="outline-danger btn-text-hitam"
                                onClick={this.props.tambahItem.bind(
                                    this,
                                    belanja.id
                                )}
                            >
                                +
                            </Button>
                        </InputGroup>
                        <div className="price-keranjang my-auto font-weight-bold">
                            <NumberFormat
                                value={
                                    this.props.getBarangById(belanja.id).harga
                                }
                                displayType={"text"}
                                thousandSeparator={"."}
                                decimalSeparator={","}
                                prefix={"Rp "}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ));
        return (
            <div>
                <div>
                    <>
                        <Modal
                            show={this.props.showKeranjang}
                            onHide={this.props.handleClose}
                            className={`come-from right`}
                        >
                            <Modal.Header className="justify-content-between keranjang-top">
                                <div className="d-flex">
                                    <Button
                                        variant="light"
                                        className="mr-3 px-3"
                                        onClick={this.props.handleClose}
                                    >
                                        <i className="fas fa-times"></i>
                                    </Button>
                                    <Modal.Title>Cart</Modal.Title>
                                </div>
                                <Button
                                    variant="light"
                                    className="px-3"
                                    onClick={this.props.hapusKeranjang}
                                >
                                    Clear All
                                </Button>
                            </Modal.Header>
                            <Modal.Body className="keranjang-body py-0">
                                {daftarBelanja}
                            </Modal.Body>
                            <Modal.Footer className="border-top-0">
                                <Button
                                    variant="danger"
                                    onClick={this.props.handleClose}
                                    block
                                    className="d-flex justify-content-between"
                                >
                                    <span>Purchase Order</span>
                                    <strong>
                                        <NumberFormat
                                            value={this.getTotal()}
                                            displayType={"text"}
                                            thousandSeparator={"."}
                                            decimalSeparator={","}
                                            prefix={"Rp "}
                                        />
                                    </strong>
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
            </div>
        );
    }
}

export default Keranjang;
