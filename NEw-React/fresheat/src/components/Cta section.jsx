import React from 'react'

function Ctasection() {
  return (
    <>
      
      
      <section className="cta-section fix">
          <div className="cta-wrapper style1  section-padding">
            <div className="shape1 float-bob-x d-none d-xxl-block">
              <img src="assets/img/shape/ctaShape1_1.png" alt="shape" />
            </div>
            <div className="shape2 float-bob-y d-none d-xxl-block">
              <img src="assets/img/shape/ctaShape1_2.png" alt="shape" />
            </div>
            <div className="shape3 float-bob-y d-none d-xxl-block">
              <img src="assets/img/shape/ctaShape1_3.png" alt="shape" />
            </div>
            <div className="container">
              <div className="cta-wrap style1">
                <div className="row">
                  <div className="col-xl-6 order-2 order-xl-1">
                    <div className="cta-content">
                      <h6 className="wow fadeInUp" data-wow-delay="0.5s">
                        WELCOME FRESHEAT
                      </h6>
                      <h3 className="wow fadeInUp" data-wow-delay="0.7s">
                        TODAY SPACIAL FOOD
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay="0.8s">
                        limits Time Offer
                      </p>
                      <a
                        className="theme-btn wow fadeInUp"
                        data-wow-delay="0.9s"
                        href="menu.html"
                      >
                        ORDER NOW{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 order-1 order-xl-2">
                    <div className="cta-thumb">
                      <img
                        className="img-fluid float-bob-x"
                        src="assets/img/cta/ctaThumb1_1.png"
                        alt="thumb"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Ctasection