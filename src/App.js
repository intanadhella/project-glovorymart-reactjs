import React, { Component } from "react";
import Body from "./components/Container";
import Footer from "./components/Footer";
import Keranjang from "./components/Keranjang";
import Navigation from "./components/Navbar";
import ketela from "./assets/images/ketela.png";
import susu from "./assets/images/susu.jpeg";

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
            daftarBelanja: [],
        };
    }

    handleClose = () => {
        this.setState({ showKeranjang: false });
    };
    handleShow = () => {
        this.setState({ showKeranjang: true });
    };

    countKeranjang = () => {
        const count = this.state.daftarBelanja.length;
        return count || "";
    };

    getBarangById = (id) => {
        const item = this.state.daftarBarang.filter(
            (barang) => barang.id === id
        );
        return item[0];
    };

    tambahItem = (id) => {
        const indexKeranjang = this.getIndexKeranjang(id);
        const keranjang = [...this.state.daftarBelanja];
        keranjang[indexKeranjang] = {
            ...keranjang[indexKeranjang],
            jumlah: keranjang[indexKeranjang].jumlah + 1,
        };

        this.setState({
            daftarBelanja: keranjang,
        });
    };

    kurangItem = (id) => {
        const indexKeranjang = this.getIndexKeranjang(id);
        const keranjang = [...this.state.daftarBelanja];

        if (keranjang[indexKeranjang].jumlah > 1) {
            keranjang[indexKeranjang] = {
                ...keranjang[indexKeranjang],
                jumlah: keranjang[indexKeranjang].jumlah - 1,
            };

            this.setState({
                daftarBelanja: keranjang,
            });
        }else{
            this.hapusItem(id)
        }
    };

    hapusItem = (id) => {
        const indexKeranjang = this.getIndexKeranjang(id);
        const keranjang = [...this.state.daftarBelanja];
        keranjang.splice(indexKeranjang, 1);

        this.setState({
            daftarBelanja: keranjang,
        });
    };

    hapusKeranjang = () => {
        this.setState({
            daftarBelanja: [],
        });
    };

    getIndexKeranjang = (id) =>
        this.state.daftarBelanja.findIndex((belanja) => belanja.id === id);

    addToCart = (id) => {
        const itemKeranjang = this.state.daftarBelanja.filter(
            (belanja) => belanja.id === id
        );
        if (itemKeranjang.length) {
            this.tambahItem(id);
        } else {
            const barang = {
                id: this.getBarangById(id).id,
                jumlah: 1,
            };
            this.setState({
                daftarBelanja: [...this.state.daftarBelanja, barang],
            });
        }
    };

    render() {
        return (
            <div>
                <Navigation
                    handleShow={this.handleShow}
                    countKeranjang={this.countKeranjang}
                />
                <Body
                    daftarBarang={this.state.daftarBarang}
                    addToCart={this.addToCart}
                />
                <Footer />
                <Keranjang
                    handleClose={this.handleClose}
                    showKeranjang={this.state.showKeranjang}
                    daftarBelanja={this.state.daftarBelanja}
                    getBarangById={this.getBarangById}
                    tambahItem={this.tambahItem}
                    kurangItem={this.kurangItem}
                    hapusItem={this.hapusItem}
                    hapusKeranjang={this.hapusKeranjang}
                />
            </div>
        );
    }
}

export default App;
