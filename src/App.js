import React, { Component } from "react";
import Body from "./components/Container";
import Footer from "./components/Footer";
import Keranjang from "./components/Keranjang";
import Navigation from "./components/Navbar";
import ketela from "./assets/images/ketela.png"
import susu from "./assets/images/susu.png"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showKeranjang: false,
            daftarBarang: [
                {
                    id: 1,
                    namaBarang: "Qtela Tempe",
                    harga: 7000,
                    gambar: ketela,
                },
                {
                    id: 2,
                    namaBarang: "Fernleaf Milk",
                    harga: 54000,
                    gambar: susu,
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
                />
            </div>
        );
    }
}

export default App;
