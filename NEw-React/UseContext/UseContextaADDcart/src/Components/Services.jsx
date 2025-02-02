import React from 'react'

function Services() {
  return (
    <>
    <section className="services-section" id="Online-about">
        <div className="container text-center common-title fw-bold">
          <h2 className="commn-heading">
            What We Will DO For <br />
            YOur Business
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-12">
              <div className="text-center card-box rounded-2 p-5 shadow">
                <img
                  src="./images/servise01.gif"
                  alt="link"
                  className="img-fluid"
                  width="200px"
                />
                <h5 className="my-3 fsw-normal">Link Building</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ut repellendus quae quam aliquid tempora labore aperiam minus
                  dicta corrupti, id maiores, consequatur itaque incidunt quas.
                  Ratione pariatur corrupti quisquam.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="#service"
                    className="icon-span rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-12">
              <div className=".servicesCard rounded-2 p-5 shadow">
                <img
                  src="./images/servise02.gif"
                  alt="link"
                  className="img-fluid"
                  width="200px"
                />
                <h5 className="my-3 fsw-normal">Content marketing</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ut repellendus quae quam aliquid tempora labore aperiam minus
                  dicta corrupti, id maiores, consequatur itaque incidunt quas.
                  Ratione pariatur corrupti quisquam.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="#service"
                    className="icon-span rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-12">
              <div className="text-center card-box rounded-2 p-5 shadow">
                <img
                  src="./images/servise03.gif"
                  alt="link"
                  className="img-fluid"
                  width="200px"
                />
                <h5 className="my-3 fsw-normal">On Page SEO</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ut repellendus quae quam aliquid tempora labore aperiam minus
                  dicta corrupti, id maiores, consequatur itaque incidunt quas.
                  Ratione pariatur corrupti quisquam.
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a
                    href="#service"
                    className="icon-span rounded-circle d-flex justify-content-center align-items-center"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services