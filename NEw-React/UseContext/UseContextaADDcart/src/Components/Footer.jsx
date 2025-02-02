import React, { useContext } from "react";
import { CartContext } from "../Cartcontext";

function Footer({ props }) {
  const { obj, add_add } = useContext(CartContext);
  console.log(obj);

  return (
    <>
      {" "}
      <footer className="main-footer-section bg-color">
       
        <div className="contact-details">
          <div className="container px-5">
            <div className="row g-0">
              <div className="col-lg-4">
                <div className="contact-div p-5 d-flex justify-content-center align-items-center">
                  <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                    <img src="./images/Call .gif" alt="" />
                  </div>
                  <p className="text-white">(+00) 1234 5678</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-div p-5 d-flex justify-content-center align-items-center">
                  <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                    <img src="./images/Message .gif " alt="" />
                  </div>
                  <p className="text-white">(+00) 1234 5678</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-div p-5 d-flex justify-content-center align-items-center">
                  <div className="icon-div d-flex justify-content-center align-items-center rounded-circle mb-3">
                    <img src="./images/Location.gif" alt="" />
                  </div>
                  <p className="text-white">(+00) 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
