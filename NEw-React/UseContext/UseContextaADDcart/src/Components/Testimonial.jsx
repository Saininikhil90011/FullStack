import React from 'react'

function Testimonial() {
  return (
    <>
    <section className="comman-section mb-5 pt-5 bg-color">
        <div className="container text-center common-title fw-bold">
          <h2 className="commn-heading text-white">
            What Client Say <br />
            About As
          </h2>
          <hr className="w-25 mx-auto" />
        </div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="card p-3" style={{ width: "19rem" }}>
                        <img
                          src="./images/images-01.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-3">Card title</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="card p-3" style={{ width: "19rem" }}>
                        <img
                          src="./images/images-01.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-3">Card title</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="d-flex justify-content-center align-content-center">
                      <div className="card p-3" style={{ width: "19rem" }}>
                        <img
                          src="./images/images-01.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-3">Card title</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <div>
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>    
    </>
  )
}

export default Testimonial