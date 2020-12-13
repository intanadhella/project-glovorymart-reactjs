import React, { Component } from "react";
import Body from "./components/Container";
import Footer from "./components/Footer";
import Keranjang from "./components/Keranjang";
import Navigation from "./components/Navbar";
import ketela from "./assets/images/ketela.png";
import susu from "./assets/images/susu.jpeg";
import lays from "./assets/images/lays.png";
import oreo from "./assets/images/oreo.png";
import tango from "./assets/images/tango.jpeg";
import doritos from "./assets/images/doritos.jpeg";
import oceana from "./assets/images/oceana.jpeg";
import frisianflag from "./assets/images/frisianflag.jpeg";
import bearbrand from "./assets/images/bearbrand.jpeg";
import cheetos from "./assets/images/cheetos.jpeg";
import bonnori from "./assets/images/bonnori.jpeg";
import kanzler from "./assets/images/kanzler.jpeg";
import popmie from "./assets/images/popmie.jpeg";
import kitkat from "./assets/images/kitkat.jpeg";
import silverqueen from "./assets/images/silverqueen.jpeg";
import feast from "./assets/images/feast.jpeg";
import populaire from "./assets/images/populaire.jpeg";
import viennetta from "./assets/images/viennetta.jpeg";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showKeranjang: false,
            daftarBarang: [
                {
                    id: 1,
                    namaBarang: "Qtela Tempe Cabai Rawit 55gr",
                    harga: 7700,
                    gambar: ketela,
                },
                {
                    id: 2,
                    namaBarang: "Susu Fernleaf Full Cream 1kg",
                    harga: 156000,
                    gambar: susu,
                },
                {
                    id: 3,
                    namaBarang: "Lay's Nori Seaweed 68gr",
                    harga: 15000,
                    gambar: lays,
                },
                {
                    id: 4,
                    namaBarang: "Oreo Supreme",
                    harga: 76000,
                    gambar: oreo,
                },
                {
                    id: 5,
                    namaBarang: "Tango Wafer Long Chocolate 47gr x 10",
                    harga: 20400,
                    gambar: tango,
                },
                {
                    id: 6,
                    namaBarang: "Doritos Nacho Cheese 160gr - 3pcs",
                    harga: 27000,
                    gambar: doritos,
                },
                {
                    id: 7,
                    namaBarang: "Nu OCEANA Sea Salt Lemonade 460ml",
                    harga: 8000,
                    gambar: oceana,
                },
                {
                    id: 8,
                    namaBarang: "Frisian Flag Family UHT Swiss Chocolate 900ml",
                    harga: 14500,
                    gambar: frisianflag,
                },
                {
                    id: 9,
                    namaBarang: "Bear Brand RTD Milk Tin 189ml",
                    harga: 10700,
                    gambar: bearbrand,
                },
                {
                    id: 10,
                    namaBarang: "Cheetos Rasa Jagung Bakar 15gr",
                    harga: 1000,
                    gambar: cheetos,
                },
                {
                    id: 11,
                    namaBarang: "MamaSuka Bon Nori Spicy 60gr",
                    harga: 21600,
                    gambar: bonnori,
                },
                {
                    id: 12,
                    namaBarang: "Kanzler Sosis Singles Original 65gr",
                    harga: 8500,
                    gambar: kanzler,
                },
                {
                    id: 13,
                    namaBarang: "Pop Mie Kuah Rasa Ayam 75g",
                    harga: 4600,
                    gambar: popmie,
                },
                {
                    id: 14,
                    namaBarang: "Kit Kat Chunky 38g",
                    harga: 10500,
                    gambar: kitkat,
                },
                {
                    id: 15,
                    namaBarang:
                        "Silver Queen Chocolate Chunky Bar Cashew 100gr",
                    harga: 18000,
                    gambar: silverqueen,
                },
                {
                    id: 16,
                    namaBarang: "Walls Feast Vanilla",
                    harga: 5000,
                    gambar: feast,
                },
                {
                    id: 17,
                    namaBarang: "Walls Populaire Chocolate Vanilla 90ml",
                    harga: 5000,
                    gambar: populaire,
                },
                {
                    id: 18,
                    namaBarang: "Walls Viennetta 800ml",
                    harga: 79000,
                    gambar: viennetta,
                },
            ],
            daftarBelanja: [],
            query: "",
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
        } else {
            this.hapusItem(id);
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

    updateQuery = (newQuery) => {
        this.setState({
            query: newQuery,
        });
    };

    filteredBarang = () => {
        const result = this.state.daftarBarang.filter((barang) => {
            if (
                barang.namaBarang
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
            ) {
                return true;
            } else {
                return false;
            }
        });
        return result;
    };

    render() {
        return (
            <div>
                <Navigation
                    handleShow={this.handleShow}
                    countKeranjang={this.countKeranjang}
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                />
                <Body
                    daftarBarang={this.filteredBarang()}
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
