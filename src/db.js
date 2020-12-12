import ketela from "./assets/images/ketela.png";
import susu from "./assets/images/susu.jpeg";
import lays from "./assets/images/lays.png";

const db = () => {
    return [
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
        {
            id: 3,
            namaBarang: "Lay's Nori Seaweed 68g",
            harga: 15000,
            gambar: lays,
        },
    ];
}

export default db
