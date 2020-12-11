import React from 'react'
import {Modal, Button} from "react-bootstrap";

function Keranjang(props) {
    return (
        <div>
            <>
                <Modal
                    show={props.showKeranjang}
                    onHide={props.handleClose}
                    className={`come-from right`}
                >
                    <Modal.Header className="justify-content-start">
                        <Button
                            variant="light"
                            className="mr-3 px-3"
                            onClick={props.handleClose}
                        >
                            <i className="fas fa-times"></i>
                        </Button>
                        <Modal.Title>Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={props.handleClose}
                            block
                            className="d-flex justify-content-between"
                        >
                            <span>Purchase Order</span>
                            <strong>Rp 14.000</strong>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default Keranjang
