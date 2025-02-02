import React, { useContext, useState } from "react";
import { CartContext } from "../Cartcontext";

function Ecpert() {
  let [data, setdata] = useState([
    { img: "images/servise01.gif", title: "Web Development" },
    { img: "images/product01.gif", title: "devops Development" },
    { img: "images/servise02.gif", title: "fronted Development" },
    { img: "images/images-01.jpg", title: "backend Development" },
  ]);
  

  return (
    <>
      <section className="services-section">
        <div className="container text-center common-title fw-bold">
          <h2 className="commn-heading">
            Tips And Tricks From <br />
            Our Expertes
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row g-5">
            {data.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={i}>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={item["img"]} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="small text-gray">
                          <i className="fa-solid fa-book-open-reader" /> :5000
                        </p>
                        <p className="small text-gray">december 15, 2024</p>
                      </div>
                      <h4 className="card-title mt-2 font-">{item["title"]}</h4>
                      <p className="card-text mt-2 mb-3">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <button onClick={() => add_add(item)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecpert;
