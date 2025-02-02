import React, { useContext } from "react";
import { CartContext } from "../Cartcontext";

function Navbar() {
  
  const {obj, add_add} = useContext(CartContext)
  // console.log(obj);
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-color py-5 pt-lg-5">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Online-hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#Online-about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#Online-section"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#Online-contect"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-cart-plus"></i>
                  <span className="badge badge-pill badge-primary">{obj.length}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
