import React from 'react'

function OfferSection() {
  return (
    <>
    <div className="offer-section fix bg-color2">
          <div className="offer-wrapper">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 col-xl-4">
                  <div
                    className="offer-card style1 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      backgroundImage: "url(assets/img/bg/offerBG1_1.jpg)",
                    }}
                  >
                    <div className="offer-content">
                      <h6>ON THIS WEEK</h6>
                      <h3>SPICY FRIED CHICKEN</h3>
                      <p>limits Time Offer</p>
                      <a href="menu.html" className="theme-btn style4">
                        ORDER NOW{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </a>
                    </div>
                    <div className="offer-thumb">
                      <img
                        className="thumbImg"
                        src="assets/img/offer/offerThumb1_1.png"
                        alt="thumb"
                      />
                      <div className="shape float-bob-x">
                        <img
                          src="assets/img/shape/offerShape1_4.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                  <div
                    className="offer-card style1 wow fadeInUp"
                    data-wow-delay="0.5s"
                    style={{
                      backgroundImage: "url(assets/img/bg/offerBG1_1.jpg)",
                    }}
                  >
                    <div className="offer-content">
                      <h6>WELCOME FRESHEAT</h6>
                      <h3>TODAY SPACIAL FOOD</h3>
                      <p>limits Time Offer</p>
                      <a href="menu.html" className="theme-btn style5">
                        ORDER NOW{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </a>
                    </div>
                    <div className="offer-thumb">
                      <img
                        className="thumbImg"
                        src="assets/img/offer/offerThumb1_2.png"
                        alt="thumb"
                      />
                      <div className="shape float-bob-x">
                        <img
                          src="assets/img/shape/offerShape1_4.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                  <div
                    className="offer-card style1  wow fadeInUp"
                    data-wow-delay="0.7s"
                    style={{
                      backgroundImage: "url(assets/img/bg/offerBG1_1.jpg)",
                    }}
                  >
                    <div className="offer-content">
                      <h6>ON THIS WEEK</h6>
                      <h3>SPECIAL CHICKEN ROLL</h3>
                      <p>limits Time Offer</p>
                      <a href="menu.html" className="theme-btn style4">
                        ORDER NOW{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </a>
                    </div>
                    <div className="offer-thumb">
                      <img
                        className="thumbImg"
                        src="assets/img/offer/offerThumb1_3.png"
                        alt="thumb"
                      />
                      <div className="shape float-bob-x">
                        <img
                          src="assets/img/shape/offerShape1_4.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
    </>
  )
}

export default OfferSection