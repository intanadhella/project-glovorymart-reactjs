import React, { Component } from "react";
import Body from "./components/Container";
import Footer from "./components/Footer";
import Keranjang from "./components/Keranjang";
import Navigation from "./components/Navbar";
import ketela from "./assets/images/ketela.png"
import susu from "./assets/images/susu.jpeg"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showKeranjang: false,
            daftarBarang: [
                {
                    id: 1,
                    namaBarang: "Qtela Tempe Cabai Rawit 55g",
                    harga: 7700,
                    gambar: ketela,
                },
                {
                    id: 2,
                    namaBarang: "Susu Fernleaf Full Cream 1kg",
                    harga: 156000,
                    gambar: susu,
                },
            ],
            daftarBelanja: [
                {
                    id: 2,
                    jumlah: 5,
                },
                {
                    id: 1,
                    jumlah: 2,
                },
            ],
        };
    }

    handleClose = () => {
        this.setState({ showKeranjang: false });
    };
    handleShow = () => {
        this.setState({ showKeranjang: true });
    };

    render() {
        return (
            <div>
                <Navigation handleShow={this.handleShow} />
                <Body daftarBarang={this.state.daftarBarang}/>
                <Footer />
                <Keranjang
                    handleClose={this.handleClose}
                    showKeranjang={this.state.showKeranjang}
                    daftarBarang={this.state.daftarBarang}
                    daftarBelanja={this.state.daftarBelanja}
                />
            </div>
        );
    }
}

export default App;
