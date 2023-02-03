import {} from "./style.css";
import React from "react";
import img from "../../img/image 1.png";
import icon from "../../img/Vector.png";
import icon2 from "../../img/Group.png";

const Navbar = () => {
  return (
    <div className="Global">
      <div>
        <div>
          <div className="Navbar">
            <div className="img1">
              <img src={img} />
            </div>
            <h3>Beranda</h3>
            <h3>Koleksi</h3>
            <h3>Syarat dan Ketentuan</h3>
            <h3>Kontak</h3>
            <button className="but">Masuk</button>
          </div>
        </div>
      </div>
      <div className="text">
        <p style={{ color: "#008f76" }}>Pojok Baca</p> Probolinggo
      </div>
      <div className="text2">
        <h1>
          Pinjam Buku Secara <p style={{ color: "#008f76" }}>Gratis</p> untuk
          Masyarakat
        </h1>
      </div>
      <div id="blik">
        <button id="button1">
          Cari Judul Buku <img src={icon} style={{ paddingLeft: "10px" }} />
        </button>
        <button className="button2">
          Donasi dengan Kami <img src={icon2} style={{ paddingLeft: "10px" }} />
        </button>
      </div>

      <div id="blok">
        <p>Sedang Tuhan pun Cemburu</p>
        <p>Emha Ainun Nadjib</p>
      </div>
    </div>
  );
};

export default Navbar;
