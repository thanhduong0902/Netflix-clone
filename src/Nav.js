import React, { useEffect, useState } from "react";
import "./Nav.css";
import Search from "./Search";

function Nav(props) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav-left">
          <img
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
            alt=""
          />
          <h2 className="movies" style={{ color: "white" }}>
            Movies
          </h2>
          <h2 className="tv-series" style={{ color: "white" }}>
            Tv Series
          </h2>
        </div>

        <Search />

        <div>
          <img
            className="nav__avatar"
            src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXii8XVOjEhSS5FzwpdTaOrI_up-1FEkQhlOAwRDR8spO8_wys-jxD7_apK43FqGNiiEXD2r3uF971rSIva2kVA.png?r=f80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
